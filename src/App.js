import "./App.css";
import Card from "./components/Card/Card";
// import Button from "./components/Button/Button";
// import Button from "@mui/material/Button";
// import Input from "./components/Input/Input";
import { useEffect, useState } from "react";
import Counter from "./components/Counter/Counter";
import LoadingButton from "@mui/lab/LoadingButton";
import { TextField } from "@mui/material";

// import { BUTTON_THEMES } from "./utils/Constants";

function App() {
    const [products, setProducts] = useState([]);
    const [isSubscribeButtonDisabled, setIsSubscribedButtonDisabled] =
        useState(false);

    useEffect(() => {
        console.log("useEffect");
        fetch("/final-project/data.json")
            .then((response) => response.json())
            .then((result) => {
                setProducts(result);
            });
    }, []);

    const onSubscribe = () => {
        setIsSubscribedButtonDisabled(true);
        setTimeout(() => {
            setIsSubscribedButtonDisabled(false);
            console.log("subscribed!");
        }, 2000);
    };

    return (
        <div className="App">
            <h1>Hello World!</h1>
            <Counter />
            <div className="App-container">
                {products.map((item, index) => {
                    return (
                        <Card
                            key={index}
                            title={item.title}
                            description={item.description}
                            onClick={(event) => console.log("click on", event)}
                            img={item.image}
                            price={item.price}
                        />
                    );
                })}
            </div>
            <div className="App-newsletter">
                <h2>Подписаться на новости компании</h2>
                <TextField
                    id="outlined-basic"
                    label="Введите e-mail"
                    variant="outlined"
                />
                {/* <Input
                    type="email"
                    placeholder="Введите email"
                    name="email"
                    id="email"
                /> */}
                <LoadingButton
                    loading={isSubscribeButtonDisabled}
                    // theme={BUTTON_THEMES.light}
                    variant="outlined"
                    onClick={onSubscribe}
                >
                    Подписаться
                </LoadingButton>
            </div>
        </div>
    );
}

export default App;
