import React from 'react'
import style from "../About/About.module.css"
function About() {
    return (
        <div>
            <div className={style.about}>
                <h1>Haqqımızda</h1>
            </div>
            <div className={style.display}>
                <div className={style.speed}>
                    <h1>Sürətli</h1>
                </div>
                <div className={style.trust}>
                    <h1>Güvənli</h1>
                </div>
                <div className={style.client}>
                    <h1>Müştəri Yönümlü</h1>
                </div>
            </div>
            <div className={style.text}>
                <p>“İDostum” MMC  sürətli poçtdaşıma və kuryer şirkəti olaraq sizə xarici ölkələrdən etdiyiniz sifarişləri daha asan,
                    daha rahat və daha güvənli şəkildə birbaşa seçdiyiniz ünvana çatdırır.
                    Dürüstlüyü əsas prinsiplərdən biri olaraq görən şirkətimiz, müştərilərə tam düzgün və qərəzsiz məlumat verəcəyinə təminat verir.
                    On minlərlə bağlamanı rahat şəkildə qəbul edəcək anbar şəraiti və professional komandaya malik iDostum, müştərilərinin bütün
                    xidmətlərdən çox rahat şəkildə yararlanması üçün çalışır.
                    Sifarişçilərin anbara gələrək vaxt itirməməsi və çətinlik çəkmədən ünvan seçməsi əsas üstünlüklərimizdəndir.
                    Türkiyədən əlavə ödəniş olmadan, birbaşa seçdiyiniz ünvana sifarişlərinizi çatdıran yeganə yerli şirkətdir.
                    Uğura gedən yolun əsası müştəri məmnuniyyəti, rahatlığı və bizim təklif etdiyimiz xidmətlərdən istifadəsində xoş təcrübəsidir.
                    Məsafələri sizin rahatlığınız üçün qısaldırıq.</p>
            </div>
        </div>
    )
}

export default About
