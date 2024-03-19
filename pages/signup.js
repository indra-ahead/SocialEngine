import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import styles from "./signup.module.css"
import toast from 'react-hot-toast';

const Signup = ({menus}) => {
    const router = useRouter();
    const [signUpData, setSignUpData] = useState({});
    const [file, setFile] = useState(null);

    const handleChange = (e, fileType) => {
        if (fileType === "file") {
            const formData = new FormData();
            formData.append('image', e.target.files[0]);
            setFile(formData); // Set the file data to the state
        } else {
            setSignUpData({
                ...signUpData,
                [e.target.name]: e.target.value
            });
        }
    };

    useEffect(() => {
        console.log(file);
    }, [file]);

    const handleSubmit = async e => {
        e.preventDefault();
        toast.success('Successfully toasted!');
        console.log(file,"form");
        // const response = await axios.post("http://localhost:3000/api/signup",{data:signUpData})
        // console.log(response,"response");
        // router.push('/login');
    };

    return (
        <form onSubmit={handleSubmit} className={styles['form-container']}>
            { menus.map((feild) => {
                return (
                    feild.type !== "select" ?
                        <input className={styles['input-field']} key={feild.name} onChange={(e) => handleChange(e, feild.type)} type={feild.type} name={feild.name} placeholder={feild.placeholder} required={feild.required} />
                        :
                        <select className={styles['select-field']} name={feild.name} onChange={(e) => handleChange(e, feild.type)} style={{ width: '100%', padding: '10px', margin: '5px 0' }}>
                            {feild.options.map((option) => {
                                return (<option value={option} key={option} style={{ backgroundColor: "black", color: 'white' }}>
                                    {option}
                                </option>)
                            })}
                        </select>
                )
            })}
            <button type="submit">Sign Up</button>
        </form>
    );
};

export default Signup;

export async function getServerSideProps(context) {
    const response = await axios.get("http://localhost:3000/api/auth/signup");

    return {
        props: { menus: response.data },
    };
}
