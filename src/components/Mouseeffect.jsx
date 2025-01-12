// components/Cursor.js
"use client"; // This directive is necessary for client-side rendering

import React from 'react';
import { LampDemo } from './Display';

class Cursor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            mouseX: 0,
            mouseY: 0,
            trailingX: 0,
            trailingY: 0,
        };
        this.cursor = React.createRef();
        this.cursorTrailing = React.createRef();
        this.animationFrame = null;
    }

    componentDidMount() {
        document.addEventListener('mousemove', this.onMouseMove);
        this.moveCursor();
    }

    componentWillUnmount() {
        document.removeEventListener('mousemove', this.onMouseMove);
        cancelAnimationFrame(this.animationFrame);
    }

    onMouseMove = (evt) => {
        const { clientX, clientY } = evt;
        this.setState({
            mouseX: clientX,
            mouseY: clientY,
        });
    }

    moveCursor = () => {
        const { mouseX, mouseY, trailingX, trailingY } = this.state;
        const diffX = mouseX - trailingX;
        const diffY = mouseY - trailingY;

        this.setState({
            trailingX: trailingX + diffX / 10,
            trailingY: trailingY + diffY / 10,
        }, () => {
            this.cursor.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
            this.cursorTrailing.current.style.transform = `translate3d(${trailingX}px, ${trailingY}px, 0)`;
            this.animationFrame = requestAnimationFrame(this.moveCursor);
        });
    }

    render() {
        return (
            <>
                <div className="container">
                    <div className="cursors">
                        <div className="cursor" ref={this.cursor} />
                        <div className='cursor' ref={this.cursorTrailing} />
                    </div>
                    <LampDemo />
                    <style jsx>{`
                    .container {
                        position: relative;
                        width: 100%;
                        height: 100vh;
                        overflow: hidden;
                    }
                    .cursors {
                        position: absolute;
                        top: 0;
                        left: 0;
                        pointer-events: none; /* Prevent cursor from interfering with other elements */
                    }
                    .cursor {
                        position: absolute;
                        width: 20px;
                        height: 20px;
                        border-radius: 50%;
                        background: red;
                        transform: translate(-50%, -50%);
                    }
                `}</style>
                </div>
            </>
        );
    }
}

export default Cursor;