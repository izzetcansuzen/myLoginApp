//Gelecek değere göre değişecek eğer ki;
    //True ise, Yeşil olup yazı "Form Başarıyla Gönderildi"
    //False ise, Kırmızı olup yazı "Gönderilemedi"
//mesajları verilmeli
export default function FormStatus(){
    return (
        <div className="formStatus">
            <span>Form Başarıyla Gönderildi</span>
        </div>
    )
}