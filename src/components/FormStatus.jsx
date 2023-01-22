//Gelecek değere göre değişecek eğer ki;
    //True ise, Yeşil olup yazı "Form Başarıyla Gönderildi"
    //False ise, Kırmızı olup yazı "Gönderilemedi"
//mesajları verilmeli
export default function FormStatus(props){
    return (
        <div className={props.formStatus.status ? "formStatus" : "unsuccessful"}>
            <span>{props.formStatus.message}</span>
        </div>
    )
}