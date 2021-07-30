import {
    Streamlit,
    StreamlitComponentBase,
    withStreamlitConnection,
} from "streamlit-component-lib"
import React, { ReactNode } from "react"
import { ToggleButtonGroup, ToggleButton } from "@material-ui/lab";


interface State {
    type: string,
    start: number | null,
    end: number | null
}

/**
 * This is a React-based component template. The `render()` function is called
 * automatically when your component should be re-rendered.
 */
class ClickableImage extends StreamlitComponentBase<State> {
    extra: number = 6;
    private svg: any;

    constructor(props: any) {
        super(props);
        this.svg = React.createRef();
        this.state = { start: null, end: null, type: "row" }
    }

    public render = (): ReactNode => {
        return (
            <div>
                <ToggleButtonGroup
                    value={this.state.type}
                    exclusive
                    onChange={(e, value) => this.setState(() => ({ type: value, start: null, end: null }))}
                    aria-label="selection type"
                    style={{margin: 2 }}
                    size="small"
                >
                    <ToggleButton value="row" aria-label="row">Row</ToggleButton>
                    <ToggleButton value="col" aria-label="col">Col</ToggleButton>
                </ToggleButtonGroup>
                <br/>
                <svg shapeRendering="optimizeSpeed"
                    viewBox={`0 0 ${this.props.args.width + 2 * this.extra + 1} ${this.props.args.height + 2 * this.extra + 1}`}
                    xmlns="http://www.w3.org/2000/svg"
                    ref={(svg) => this.svg = svg}
                    onClick={e => this.handler(e)} >
                    <image href={this.props.args.src} width={this.props.args.width} height={this.props.args.height} x={this.extra} y={this.extra} />
                    {this.render_row_left_beams()}
                    {this.render_col_top_beams()}
                    {this.render_row_right_beams()}
                    {this.render_col_bottom_beams()}
                    {this.render_clicked()}
                </svg>
            </div>
        )
    }


    public render_row_left_beams = () => {
        return this.props.args.row_left_beams.map((beam: number[], index: number) => {
            return (
                <React.Fragment>
                    <rect x={this.extra} y={this.extra + beam[0]} width={this.props.args.width}
                        height={beam[1] - beam[0]} fill="blue" opacity="0.25" />
                    <rect x={0} y={this.extra + beam[0]} width={this.extra}
                        height={beam[1] - beam[0]} fill="blue" opacity="1.0" />
                </React.Fragment>
            )
        })
    }

    public render_col_top_beams = () => {
        return this.props.args.col_top_beams.map((beam: any, index: number) => {
            return (
                <React.Fragment>
                    <rect x={this.extra + beam[0]} y={this.extra} height={this.props.args.height}
                        width={beam[1] - beam[0]} fill="red" opacity="0.25" />
                    <rect x={this.extra + beam[0]} y={0} height={this.extra}
                        width={beam[1] - beam[0]} fill="red" opacity="1.0" />
                </React.Fragment>
            )
        })
    }

    public render_row_right_beams = () => {
        return this.props.args.row_right_beams.map((beam: number[], index: number) => {
            return (
                <React.Fragment>
                    <rect x={this.extra} y={this.extra + beam[0]} width={this.props.args.width}
                        height={beam[1] - beam[0]} fill="aqua" opacity="0.25" />
                    <rect x={this.extra + this.props.args.width} y={this.extra + beam[0]} width={this.extra}
                        height={beam[1] - beam[0]} fill="aqua" opacity="1.0" />
                </React.Fragment>
            )
        })
    }

    public render_col_bottom_beams = () => {
        return this.props.args.col_bottom_beams.map((beam: any, index: number) => {
            return (
                <React.Fragment>
                    <rect x={this.extra + beam[0]} y={this.extra} height={this.props.args.height}
                        width={beam[1] - beam[0]} fill="orchid" opacity="0.25" />
                    <rect x={this.extra + beam[0]} y={this.extra + this.props.args.height} height={this.extra + 1}
                        width={beam[1] - beam[0]} fill="orchid" opacity="1.0" />
                </React.Fragment>
            )
        })
    }

    public render_clicked = () => {
        if (this.state.start != null && this.state.end != null) {
            if (this.state.type == "row") {
                return (
                    <rect x={this.extra} y={this.extra + this.state.start} width={this.props.args.width}
                        height={this.state.end - this.state.start} fill="black" opacity="1.0" />
                )
            }
            else {
                return (
                    <rect x={this.extra + this.state.start} y={this.extra} height={this.props.args.height}
                        width={this.state.end - this.state.start} fill="black" opacity="1.0" />
                )
            }
        }
        else if (this.state.start != null) {
            if (this.state.type == "row") {
                return (
                    <line x1={this.extra} y1={this.extra + this.state.start} x2={this.extra + this.props.args.width}
                        y2={this.extra + this.state.start} stroke="black" />
                )
            }
            else {
                return (
                    <line x1={this.extra + this.state.start} y1={this.extra} y2={this.extra + this.props.args.height}
                        x2={this.extra + this.state.start} stroke="black" />
                )
            }
        }
    }

    public handler(event: any) {
        event.preventDefault();
        let point = this.svg.createSVGPoint();
        point.x = event.clientX;
        point.y = event.clientY;
        point = point.matrixTransform(this.svg.getScreenCTM().inverse());
        point.x = point.x - this.extra;
        point.y = point.y - this.extra;


        this.setState(
            function (prevState) {
                let coordinateOfInterest = ((prevState.type == "row") ? point.y : point.x);
                if (prevState.start === null || prevState.end != null) {
                    return { "start": coordinateOfInterest, end: null, type: prevState.type };
                }
                else {
                    return { "start": prevState.start, end: coordinateOfInterest, type: prevState.type };
                }
            },
            () => {
                if (this.state.start != null && this.state.end != null && this.state.start < this.state.end) {
                    Streamlit.setComponentValue(this.state)
                }
            }
        );
    }
}

export default withStreamlitConnection(ClickableImage)
