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
    constructor(props: any) {
        super(props);
    }

    public render = (): ReactNode => {
        let row_beams = this.render_rowbeams();
        let col_beams = this.render_colbeams();
        return (
            <svg viewBox={`0 0 ${this.props.args.width} ${this.props.args.height}`} xmlns="http://www.w3.org/2000/svg">
                <image href={this.props.args.src} width={this.props.args.width} height={this.props.args.height} />
                {row_beams}
                {col_beams}
            </svg>
        )
    }

    public render_rowbeams = () => {
        let marked = (this.state && this.state.type == "row") ? this.state.index : null;
        return this.props.args.row_beams.map((beam: number[], index: number) => {
            return <rect x={0} y={beam[0]} width={this.props.args.width}
                height={beam[1] - beam[0]} fill="blue" opacity="0.25"
                onClick={e => this.handler("row", index)} strokeWidth={index == marked ? "2": "0"} stroke="black"/>
        })
    }

    public render_colbeams = () => {
        let marked = (this.state && this.state.type == "col") ? this.state.index : null;
        return this.props.args.col_beams.map((beam: any, index: number) => {
            return <rect x={beam[0]} y={0} height={this.props.args.height}
                width={beam[1] - beam[0]} fill="red" opacity="0.25"
                onClick={e => this.handler("col", index)} strokeWidth={index == marked ? "2": "0"} stroke="black"/>
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
