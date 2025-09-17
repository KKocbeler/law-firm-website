import { FaUserTie } from "react-icons/fa6";
import "./Members.scss";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Members = () => {
  return (
    <div className="members container">
        <article className="member-list">
            <section className="member-list__item">
                <div className="member-list__img">
                    <FaUserTie />
                </div>
                <h3 className="member-list__name">Av. Murat Ayerden</h3>
                <p className="member-list__statu">Avukat</p>
                <p className="member-list__tel"><FaPhoneAlt /> (505) 555 55 55</p>
                <p className="member-list__mail"><IoMdMail /> example@example.com</p>  
            </section>
            <section className="member-list__item">
                <div className="member-list__img">
                    <FaUserTie />
                </div>
                <h3 className="member-list__name">Av. Özkan Özer</h3>
                <p className="member-list__statu">Avukat</p>
                <p className="member-list__tel"><FaPhoneAlt /> (505) 555 55 55</p>
                <p className="member-list__mail"><IoMdMail /> example@example.com</p>
            </section>
            <section className="member-list__item">
                <div className="member-list__img">
                    <FaUserTie />
                </div>
                <h3 className="member-list__name">Krd. Tayfun Demirhan</h3>
                <p className="member-list__statu">Koordinatör</p>
                <p className="member-list__tel"><FaPhoneAlt /> (505) 555 55 55</p>
                <p className="member-list__mail"><IoMdMail /> example@example.com</p>
            </section>
        </article>
    </div>
  )
}

export default Members