import { FaUserTie } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { useTranslation } from "react-i18next";
import "./Members.scss";

const Members = () => {
  const { t } = useTranslation();
  const members = t("members", { returnObjects: true }) as {
    name: string;
    position: string;
    phone: string;
    email: string;
  }[];

  return (
    <div className="members container">
        <article className="member-list">
            {members.map((member, index) => (
              <section className="member-list__item" key={index}>
                  <div className="member-list__img">
                      <FaUserTie />
                  </div>
                  <h3 className="member-list__name">{member.name}</h3>
                  <p className="member-list__statu">{member.position}</p>
                  <p className="member-list__tel"><FaPhoneAlt /> {member.phone}</p>
                  <p className="member-list__mail"><IoMdMail /> {member.email}</p>  
              </section>
            ))}
        </article>
    </div>
  );
};

export default Members;
