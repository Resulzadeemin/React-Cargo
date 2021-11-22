import React from 'react'
import style from "../Corporative/Corpa.module.css"
function Corpa() {
    return (
        <div>
            <div className={style.corpa}>
                <h1>Korporativ</h1>
            </div>
            <div className={style.head}>
                <div className={style.number}>
                    <h1>01.</h1>
                </div>
                <div className={style.text}>
                    <h1>Korporativ iDostum ilə</h1>
                    <p>iDostum şirkəti, fiziki şəxslərlə yanaşı hüquqi şəxslərə də xidmət göstərir.
                        Əlavə məlumat almaq üçün, <a href="mailto:corporate@idostum.com">corporate@idostum.com</a> mail ünvanına şirkət haqqında qısa məlumat
                        və təkliflər barədə məlumat göndərməyiniz xahiş olunur.</p>
                </div>
            </div>
        </div>
    )
}

export default Corpa
