import React from "react";
import github from "./github.png";

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <p>پروژه را در <a href="#"><img src={github} alt="گیت هاب" /></a> فورک کنید</p>
            </footer>
        )
    }
}

export default Footer;