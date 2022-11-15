import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useEffect, useState } from "react";
import dataindia from "./Data/dataindia";
import axios from "axios";

// import axios from 'react-native-axios'


export const Newsdata = createContext();
function ContextNews({ children }) {


    const [data, setdata] = useState(dataindia.articles);

    // const [search, setsearch] = useState("");

    const [categories, setcategories] = useState("General");
    const [country, setcountry] = useState("in");
    const [savednews, setsavednews] = useState([]);
    AsyncStorage.getItem("SavedNews").then((res) => {
        // console.log(res);
        setsavednews(res)
    })

    useEffect(() => {
        axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${categories}&apiKey=b3de14ca631c4b448aa149dfe92c4859`).then((response) => {
            console.log(response.data.articles);
            setdata(response.data.articles)
            // console.log(articles[0].content)
        }).catch((err) => {
            console.log(err)
        });


    }, [categories])

    // console.log(Newsdata)
    return (
        <Newsdata.Provider value={{ data, setdata, categories, setcategories, country, setcountry, savednews, setsavednews }} >
            {children}
        </Newsdata.Provider>
    )
}
export default ContextNews;