import './Actuality.css';
import React, {useEffect, useState} from 'react';
import HeaderActuality from './header/Header'
import DescriptionActuality from './description/Description'
import CommentActuality from './comment/Comment'
import * as postsApi from "../../../api/posts";
import {toast} from "react-toastify";

const Actuality = ({history}) => {

    const [actuality, setActuality] = useState({
        'description': ''
    });
    const [add, setAdd] = useState(1);
    const [actualities, setActualities] = useState([]);
    const [loading, setLoading] = useState(true);

    console.log(actualities)

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
    }, [add])

    const handleChange = ({nativeEvent}) => {
        const name = nativeEvent.target.name
        const value = nativeEvent.target.value
        setActuality({...actuality, [name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await postsApi.postPosts(actuality);
            setAdd(add + 1);
        } catch ({response}) {
            if (response.data.statusCode === 401) {
                toast.error('Vous devez être connecté avant de publier quoi que ce soit.');
            }
        }
    }

    return (
        <>
            <div className="actuality-flow">
                <div className="card-custom">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="description" className="mt-2 mb-2">Que voulez-vous dire ?</label>
                            <textarea name="description" id="description" onChange={handleChange} className="form-control"></textarea>
                            <br/>
                            <button type="submit" className="btn btn-success">Publier !</button>
                        </div>
                    </form>
                </div>

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
        </>
    )
}

export default Actuality;
