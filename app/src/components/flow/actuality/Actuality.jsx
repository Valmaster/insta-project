import './Actuality.css';
import React, {useEffect, useState} from 'react';
import HeaderActuality from './header/Header'
import DescriptionActuality from './description/Description'
import CommentActuality from './comment/Comment'
import * as postsApi from "../../../api/posts";

const Actuality = () => {

    const [actualities, setActualities] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getActus = async () => {
            try {
                const data = await postsApi.getPosts();
                setActualities(data);
                setLoading(false);
            } catch (error) {
                console.log('Erreur lors de la récupération de la liste des posts');
            }
        }
        getActus();
    }, [])

    return (
        <div className="actuality-flow">
            {actualities.map((actuality) =>
                <div className="item-flow">
                    <HeaderActuality/>
                    <div className="item-flow-image">
                        <img src="./cartman.jpg" alt="Cartman"/>
                    </div>
                    <DescriptionActuality actuality={actuality}/>
                    <CommentActuality/>
                </div>
            )}
        </div>
    )
}

export default Actuality;
