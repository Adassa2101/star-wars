import {base_url, openingCrawl} from "../utils/constants.js";
import {useEffect, useState} from "react";

const OpeningCrawl = () => {
    const [OpeningCrawl, setOpeningCrawl] = useState( '' );

    useEffect( () => {
        const episode = Math.floor( Math.random() * 6 ) + 1;
        fetch( `${base_url}/v1/films/${episode}` )
            .then( res => res.json() )
            .then( data => setOpeningCrawl( data.opening_crawl ) );
        //return () => console.log('Opening crawl was unmounted')
    }, [] )
    if (OpeningCrawl) {
        return (
            <p className="farGalaxy">{openingCrawl}</p>
        );
    } else {
        return (

            <p className={"farGalaxy"}>
                <span className="spinner-border spinner-border-sm"></span>
                Loading...
            </p>
        );
    }


};

export default OpeningCrawl;