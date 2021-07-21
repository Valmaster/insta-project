import React, {useState} from "react";
import * as postApi from "../../../../api/posts";

const FormEditActuality = ({actuality}) => {

    const [loading, setLoading] = useState(false);
    const [newActuality, setNewActuality] = useState({
        'description': ''
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            setLoading(false);
            await postApi.patchPosts(actuality.id, newActuality);
        } catch (e) {
            console.log(e);
            setLoading(false);
        }
    }

    const handleChange = ({nativeEvent}) => {
        const name = nativeEvent.target.name
        const value = nativeEvent.target.value
        setNewActuality({...newActuality, [name]: value})
    }

    return (
        <>
            {actuality &&
            <form onSubmit={handleSubmit}>
                <div className="col-md-12">
                <textarea
                    name="description"
                    required
                    defaultValue={actuality.description}
                    onChange={handleChange}
                >

                </textarea>
                </div>
                <div className="col-md-12 mt-3">
                    <button type="submit">Modifier</button>
                </div>
            </form>
            }
        </>
    )
}

export default FormEditActuality
