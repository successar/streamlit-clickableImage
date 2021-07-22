import {
    Streamlit,
    StreamlitComponentBase,
    withStreamlitConnection,
} from "streamlit-component-lib"
import React, { ReactNode } from "react"


interface State {
    type: string,
    index: number
}

/**
 * This is a React-based component template. The `render()` function is called
 * automatically when your component should be re-rendered.
 */
class ClickableImage extends StreamlitComponentBase<State> {
    extra: number = 6;

    constructor(props: any) {
        super(props);
    }

    public render = (): ReactNode => {
        return (
            <svg shapeRendering="optimizeSpeed"
                viewBox={`0 0 ${this.props.args.width + 2 * this.extra + 1} ${this.props.args.height + 2 * this.extra + 1}`}
                xmlns="http://www.w3.org/2000/svg">
                <image href={this.props.args.src} width={this.props.args.width} height={this.props.args.height} x={this.extra} y={this.extra} />
                {this.render_row_left_beams()}
                {this.render_col_top_beams()}
                {this.render_row_right_beams()}
                {this.render_col_bottom_beams()}
            </svg>
        )
    }

    public render_row_left_beams = () => {
        let marked = (this.state && this.state.type == "row_left") ? this.state.index : null;
        return this.props.args.row_left_beams.map((beam: number[], index: number) => {
            return (
                <React.Fragment>
                    <rect x={this.extra} y={this.extra + beam[0]} width={this.props.args.width}
                        height={beam[1] - beam[0]} fill="blue" opacity="0.25" />
                    <rect x={0} y={this.extra + beam[0]} width={this.extra}
                        height={beam[1] - beam[0]} fill={index == marked ? "black" : "blue"} opacity="1.0"
                        onClick={e => this.handler("row_left", index)} />
                </React.Fragment>
            )
        })
    }

    public render_col_top_beams = () => {
        let marked = (this.state && this.state.type == "col_top") ? this.state.index : null;
        return this.props.args.col_top_beams.map((beam: any, index: number) => {
            return (
                <React.Fragment>
                    <rect x={this.extra + beam[0]} y={this.extra} height={this.props.args.height}
                        width={beam[1] - beam[0]} fill="red" opacity="0.25" />
                    <rect x={this.extra + beam[0]} y={0} height={this.extra}
                        width={beam[1] - beam[0]} fill={index == marked ? "black" : "red"} opacity="1.0"
                        onClick={e => this.handler("col_top", index)} />
                </React.Fragment>
            )
        })
    }

    public render_row_right_beams = () => {
        let marked = (this.state && this.state.type == "row_right") ? this.state.index : null;
        return this.props.args.row_right_beams.map((beam: number[], index: number) => {
            return (
                <React.Fragment>
                    <rect x={this.extra} y={this.extra + beam[0]} width={this.props.args.width}
                        height={beam[1] - beam[0]} fill="aqua" opacity="0.25" />
                    <rect x={this.extra + this.props.args.width} y={this.extra + beam[0]} width={this.extra}
                        height={beam[1] - beam[0]} fill={index == marked ? "black" : "aqua"} opacity="1.0"
                        onClick={e => this.handler("row_right", index)} />
                </React.Fragment>
            )
        })
    }

    public render_col_bottom_beams = () => {
        let marked = (this.state && this.state.type == "col_bottom") ? this.state.index : null;
        return this.props.args.col_bottom_beams.map((beam: any, index: number) => {
            return (
                <React.Fragment>
                    <rect x={this.extra + beam[0]} y={this.extra} height={this.props.args.height}
                        width={beam[1] - beam[0]} fill="orchid" opacity="0.25" />
                    <rect x={this.extra + beam[0]} y={this.extra + this.props.args.height} height={this.extra + 1}
                        width={beam[1] - beam[0]} fill={index == marked ? "black" : "orchid"} opacity="1.0"
                        onClick={e => this.handler("col_bottom", index)} />
                </React.Fragment>
            )
        })
    }

    public handler(type: string, index: number) {
        this.setState(
            prevState => ({ "type": type, "index": index }),
            () => Streamlit.setComponentValue([type, index])
        );
    }
}

export default withStreamlitConnection(ClickableImage)
