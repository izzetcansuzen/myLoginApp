import {useState} from "react";
import FormStatus from "./components/FormStatus.jsx";

export default function App(){
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        password_verification: "",
        isAccepted: ""
    });

    const [formStatus, setFormStatus] = useState({
        status: undefined,
        message: ""
    })

    function handleFormChange(){
        const {name, value, type, checked} = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type == "checkbox" ? checked : value
        }))
    }

    function handleFormSubmit(){
        event.preventDefault();
        // console.log(formData);
        if(formData.email && formData.password && formData.password_verification && formData.isAccepted){
            setFormStatus({
                    status: true,
                    message: "Form Başarıyla Gönderildi"
            });
        }
        if(formData.password !== formData.password_verification){
            setFormStatus({
                status: false,
                message: "Şifreler birbiri ile eşleşmiyor"
            });
        }
        if(!formData.email || !formData.password || !formData.password_verification){
            setFormStatus({
                status: false,
                message: "Değerler boş olmamalıdır"
            });
        }
        if(!formData.isAccepted){
            setFormStatus({
                status: false,
                message: "Termleri kabul etmelisiniz"
            });
        }
    }

    return (
        <div className="container">
            {
                formStatus.status !== undefined ?
                    <FormStatus
                        formStatus={formStatus}
                    /> :
                    ""
            }
            <form action="" onSubmit={handleFormSubmit}>
                <div className="container_form">
                    <label htmlFor="email">Email</label>
                    <input type="email"
                           placeholder="email"
                           id="email"
                           className="input"
                           name="email"
                           onChange={handleFormChange}
                    />
                </div>
                <div className="container_form">
                    <label htmlFor="password">Password</label>
                    <input type="password"
                           placeholder="password"
                           id="password"
                           className="input"
                           name="password"
                           onChange={handleFormChange}
                    />
                </div>
                <div className="container_form">
                    <label htmlFor="password_verification">Password Verification</label>
                    <input type="password"
                           placeholder="password verification"
                           id="password_verification"
                           className="input"
                           name="password_verification"
                           onChange={handleFormChange}
                    />
                </div>
                <div className="container_form container_checkbox">
                    <input type="checkbox"
                           id="isAccepted"
                           className="input_checkbox"
                           name="isAccepted"
                           onChange={handleFormChange}
                    />
                    <label htmlFor="isAccepted">Accept Terms</label>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}