import React from 'react'
import style from "../Faq/Faq.module.css"
import { useState } from "react"
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import fin1 from "../Img/fin-1.png"
import fin2 from "../Img/fin-2.png"
import { Link } from "react-router-dom"
function Faq() {
    const [show, setShow] = useState(false)   //modal-1
    function open() {
        setShow(!show)
    }
    const [show2, setShow2] = useState(false)  //modal-2
    function open2() {
        setShow2(!show2)
    }
    const [show3, setShow3] = useState(false)  //modal-3
    function open3() {
        setShow3(!show3)
    }
    const [show4, setShow4] = useState(false)  //modal-4
    function open4() {
        setShow4(!show4)
    }
    const [show5, setShow5] = useState(false)  //modal-5
    function open5() {
        setShow5(!show5)
    }
    return (
        <div className={style.faq}>
            <div className={style.quesans}>
                <h1>Sual-Cavab</h1>
            </div>
            <div onClick={open} className={style.click}>
                <div className={style.head}>
                    <h1>Qeydiyyatdan necə keçim?</h1>
                </div>
                <div>
                    {show ? <IoIosArrowUp className={style.icon} /> : <IoIosArrowDown className={style.icon} />}
                </div>
            </div>
            <div className={style.text}>
                {
                    show ? <p>*Qeydiyyat prosesində ingilis hərflərdən istifadə edin
                        Qeydiyyatdan keçərək iDostum-da şəxsi kabinet əldə edirsiniz. Şəxsi kabinet vasitəsi ilə sifarişlərinizi iDostum-un xaricdə yerləşən anbarda qəbul edilməsi,
                        Azərbaycan Gömrük xidmətindən keçirilməsi və sizə çatdırılması xidmətlərindən istifadə edə biləcəksiniz.
                        Aşağıda qeyd edilən məlumatlar Azərbaycan Gömrük xidmətində sizin sifarişlərinizi rahat və düzgün bəyan etmək üçündür.
                        Ad və Soyad – sizin adınız və soyadınız.
                        Email – vacib məlumatlarla bağlı, şəxsi kabinetinizə daxil olmaq üçün istifadə edilir. Şifrəni unutduğunuz halda email vasitəsi ilə şifrənizi bərpa edə bilərsiniz.
                        Mobil Nömrə - qeydiyyatı tamamlamaq üçün işlək mobil nömrəyə sahib olmalısınız, əks halda qeydiyyatı tamamlaya bilməyəcəksiniz.
                        Çatdırılma zamanı xidmətin keyfiyyətini artırmaq üçün iDostum sizinlə əlaqə saxlaya bilər.
                        Sənədin Nömrəsi – sizin şəxsiyyət vəsiqənizin seriya (AZE, AA) və nömrəsi.
                        FİN Kod – sizin şəxsiyyət vəsiqənizdə qeyd olunan FİN kod.
                        Şəhər və Ünvan – Şəxsiyyət Vəsiqənizdə qeyd olunan qeydiyyat ünvanı.
                        Şifrə - Şifrə ən az 6 simvoldan ibarət olmalıdır və sizin şəxsi məlumatlarınızı qorumaq üçündür. Şəxsi kabinetinizin şifrəsini heç kimlə bölüşməyin.
                        iDostum-un əməkdaşları heç vaxt sizin şəxsi kabinetinizin şifrəsini istəmir.
                        İstifadəçi şərtləri – istifadəçi şərtlərini qəbul etməklə siz iDostum təklif etdiyi xidmətlərdən yararlanmaq üçün razılaşırsınız.</p> : null
                }
            </div>

            <div onClick={open2} className={style.click}>
                <div className={style.head}>
                    <h1>FİN kod</h1>
                </div>
                <div>
                    {show2 ? <IoIosArrowUp className={style.icon} /> : <IoIosArrowDown className={style.icon} />}
                </div>
            </div>
            <div className={style.text}>
                {
                    show2 ?
                        <>
                            <p>FİN kod – şəxsiyyət vəsiqəsinin Fərdi İdentifikasiya Nömrəsidir.
                                Fərdi identifikasiya nömrəsi, şəxs barəsində dövlət reyestrinə daxil
                                edilən məlumatları müəyyən etməyə imkan verən,
                                qanunla müəyyən olunmuş qaydada təqdim edilən təkrarolunmaz koddur.</p>
                            <div className={style.img}>
                                <img src={fin1} />
                                <img className={style.finimage} src={fin2} />
                            </div>
                        </> : null
                }
            </div>

            <div onClick={open3} className={style.click}>
                <div className={style.head}>
                    <h1>Məhsulu necə sifariş edim?</h1>
                </div>
                <div>
                    {show3 ? <IoIosArrowUp className={style.icon} /> : <IoIosArrowDown className={style.icon} />}
                </div>
            </div>
            <div className={style.text}>
                {
                    show3 ? <p>Türkiyənin onlayn mağazalarından alış-veriş edərkən Türkiyə daxili ünvan kimi iDostum-un Türkiyədə yerləşdiyi anbarın ünvanı olmalıdır.
                        iDostum-un Türkiyədə yerləşdiyi ünvanı siz Şəxsi kabinetinizdə <Link to="/">“Xaricdəki Ünvanlarım”</Link> bölməsində tapa bilərsiniz və həmin məlumatları
                        Türkiyədə onlayn mağazasının adres bölməsinə qeyd edin.
                        Əlavə olaraq, şəxsi kabinetinizdən <Link to="/">“Mənim üçün sifariş et”</Link> xidmətindən istifadə edərək məhsul sifarişini həyata keçirə bilərsiniz.</p> : null
                }
            </div>

            <div onClick={open4} className={style.click}>
                <div className={style.head}>
                    <h1>Çatdırılma haqqı hansı üsulla hesablanır?</h1>
                </div>
                <div>
                    {show4 ? <IoIosArrowUp className={style.icon} /> : <IoIosArrowDown className={style.icon} />}
                </div>
            </div>
            <div className={style.text}>
                {
                    show4 ? <p>Çatdırılma xidmətinin tarifləri haqqında idostum.com saytının əsas səhifəsi və ya <Link to="/tariffs">“Tariflər”</Link> bölməsindən məlumat ala bilərsiniz.
                        iDostum-da çatdırılma qiymətləri, qrama-qram üsulu ilə hesablanır. Yəni, sifariş olunmuş məhsulun faktiki çəkisini “kg” üçün qeyd edilən qiymətə tətbiq etməklə sifarişinizin çatdırılma qiymətin hesablaya bilərsiniz.
                        Bu üsul müştərilərin çatdırılma xidmətinin qiymətini hesablamasını daha rahat, asan və sərfəli edir.
                        Beynəlxalq Hava Nəqliyyatı Assosiasiyasının metrik standartlarına uyğun olaraq sifariş etdiyiniz bağlamanın hər hansı tərəfi (en, uzun, hündürlük)
                        1 (bir) metrdən artıq olarsa çatdırılma haqqını müəyyən etmək üçün bağlamanın fiziki və həcm çəkisi hesablanır və alınan göstəricilərdən böyük olanı daşınma haqqının hesablanması üçün əsas çəki kimi qəbul edilir.
                        Həcm çəkisi hesablama formulası
                        En (sm) x Uzunluq (sm) x Hündürlük (sm)/6000 = Həcm çəkisi (kq)
                        Çatdırılma haqqını rahat və düzgün hesablamaq üçün əsas səhifədə və ya Tariflər bölməsində kalkulyatordan istifadə edə bilərsiniz.</p> : null
                }
            </div>

            <div onClick={open5} className={style.click}>
                <div className={style.head}>
                    <h1>Ödəmə Üsulları</h1>
                </div>
                <div>
                    {show5 ? <IoIosArrowUp className={style.icon} /> : <IoIosArrowDown className={style.icon} />}
                </div>
            </div>
            <div className={style.text}>
                {
                    show5 ? <p>iDostum-la siz çatdırılma xidmət haqqını balans artırmadan da, bir başa bank kartı vasitəsi ilə ödəmək mümkündür.
                        iDostum balans artırmaqda və ya bir başa bank kartı ilə ödəmələrdə öz tərəfdən heç bir əlavə komissiya tədbiq etmir.
                        iDostum təklif etdiyi xidmətlərinə görə nağd ödənişləri qəbul etmir.</p> : null
                }
            </div>


        </div>
    )
}

export default Faq
