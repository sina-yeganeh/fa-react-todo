import ReactDOM from 'react-dom';
import  "./assets/style/styles.min.css";
import Header from "./components/header";
import Body from "./components/body";
import Footer from "./components/footer";

ReactDOM.render(
  <div>
    <Header />
    <Body />
    <Footer />
  </div>,
  document.getElementById('root')
);
