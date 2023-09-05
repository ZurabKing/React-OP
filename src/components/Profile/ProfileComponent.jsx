import React from "react";
import "./ProfileComponent.scss";
import { useParams } from "react-router-dom";
import { Api } from "../../api";
import { RegistrationContext } from "../../context";
import { RiCalendarLine } from "react-icons/ri";
import { errorNotification } from "../../utils/errorNotification";

export const ProfileComponent = () => {
  const { id } = useParams();
  const { user } = React.useContext(RegistrationContext);

  const isMe = id === user?.id;

  const [profile, setProfile] = React.useState(isMe ? user : null);

  const fetchUserProfile = async () => {
    try {
      const data = await Api.teachers.getTeacherProfile(id);
      setProfile(data);
    } catch (error) {
      errorNotification(error);
    }
  };

  React.useEffect(() => {
    if (id) {
      fetchUserProfile();
    }
  }, [id]);

  if (!profile) {
    return null;
  }

  return (
    <div className="profile-root">
      <div className="profile-header">
        <div
          style={{
            width: "160px",
            height: "160px",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          <img src={profile?.photo} alt="Avatar" className="profile-avatar" />
        </div>
        <div className="profile-header-info">
          <h2 className="profile-header-name">
            {profile?.firstname} {profile?.name} {profile?.patronymic}
          </h2>
          <div className="profile-header-text-root">
            <div className="profile-header-text-box">
              <h3 className="profile-header-text-name">Возраст:</h3>
              <h3 className="profile-header-text-desc">{profile?.born}</h3>
            </div>
            <div className="profile-header-text-box">
              {profile?.discipline && (
                <>
                  <h3 className="profile-header-text-name">Предмет:</h3>
                  <h3 className="profile-header-text-desc">
                    {profile?.discipline}
                  </h3>
                </>
              )}
            </div>
            <div className="profile-header-text-box">
              {profile?.class && (
                <>
                  <h3 className="profile-header-text-name">
                    Классный руководитель:
                  </h3>
                  <h3 className="profile-header-text-desc">
                    {profile?.class}
                    {profile?.liter}
                  </h3>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <hr className="education-hr" />
      <div className="profile-education-container">
        <div className="profile-education-container-title-block">
          <h3 className="profile-education-container-title">Информация</h3>
        </div>

        <div className="education-level-container">
          <div className="education-level-block">
            <div className="education-level-info">
              {profile?.subdiscipline && (
                <>
                  <h4 className="education-level-info-title">
                    Предмет доп. образования
                  </h4>
                  <span className="education-level-info-span">
                    {profile?.subdiscipline}
                  </span>
                </>
              )}
            </div>
            <div className="education-level-info">
              {profile?.ranks && (
                <>
                  <h4 className="education-level-info-title">Звание</h4>
                  <span className="education-level-info-span">
                    {profile.ranks.map((rank, index) => (
                      <React.Fragment key={index}>
                        {rank}
                        {index !== profile.ranks.length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </span>
                </>
              )}
            </div>
            <div
              style={{ display: "flex", gap: "7px", flexDirection: "column" }}
            >
              <div className="education-level-info">
                {profile?.post_type && (
                  <>
                    <h4 className="education-level-info-title">
                      Должность: &nbsp;
                      <span className="education-level-info-span">
                        {profile.post_type}
                      </span>
                    </h4>
                  </>
                )}
              </div>
              <div className="education-level-info">
                {profile?.post_experience && (
                  <>
                    <h4 className="education-level-info-title">
                      Опыт в данной должности: &nbsp;
                      <span className="education-level-info-span">
                        {profile.post_experience}{" "}
                        {profile.post_experience < 5 ? "года" : "лет"}
                      </span>
                    </h4>
                  </>
                )}
              </div>
              <div className="education-level-info">
                {profile?.teacher_experience && (
                  <>
                    <h4 className="education-level-info-title">
                      Педагогический стаж: &nbsp;
                      <span className="education-level-info-span">
                        {profile?.teacher_experience}
                        {profile?.teacher_experience < 5 ? "года" : "лет"}
                      </span>
                    </h4>
                  </>
                )}
              </div>
              <div className="education-level-info">
                {profile?.skill && (
                  <>
                    <h4 className="education-level-info-title">
                      Категория: &nbsp;
                      <span className="education-level-info-span">
                        {profile?.skill}
                      </span>
                    </h4>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="education-hr" />
      <div className="profile-education-container">
        <div className="profile-education-container-title-block">
          <h3 className="profile-education-container-title">Образование</h3>
          <span className="profile-education-container-subtitle">
            Вся информация про образование
          </span>
        </div>

        <div className="education-level-container">
          {profile?.education.map((item) => {
            return (
              <div className="education-level-block">
                <div className="education-level-info">
                  <h4 className="education-level-info-title">{item?.type}</h4>
                  <span className="education-level-info-span">
                    {item?.university}
                  </span>
                  <span className="education-level-info-span-icon">
                    <RiCalendarLine /> {item?.from} - {item?.to}
                  </span>
                </div>
                {item?.scan && (
                  <div className="education-level-scan">
                    <a download href={item?.scan}>
                      Скачать скан
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <hr className="education-hr" />
      <div className="experience-container">
        <div className="experience-title-block">
          <h3 className="experience-title">Опыт</h3>
          <span className="experience-subtitle">
            Вся информация про опыт работы
          </span>
        </div>
        <div className="experience-container-block">
          {profile?.works.map((item) => {
            return (
              <div className="experience-info-block">
                <div className="experience-info">
                  <h4 className="experience-info-title">{item?.post}</h4>
                  <span className="experience-info-span">{item?.work}</span>
                  <span className="experience-info-span-icon">
                    <RiCalendarLine /> {item?.from} - {item?.to}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <hr className="education-hr" />
      <div className="experience-container">
        <h3 className="experience-title">Контакты</h3>
        <div className="contact-user-block">
          <div className="contact-user-info-block">
            <h4 className="contact-user-title">Номер телефона</h4>
            <span className="contact-user-span">{profile?.phone}</span>
          </div>
          <>
            {profile?.whatsapp && (
              <div className="contact-user-info-block">
                <h4 className="contact-user-title">Whatsapp</h4>
                <span className="contact-user-span">{profile?.whatsapp}</span>
              </div>
            )}
          </>
          <>
            {profile?.email && (
              <div className="contact-user-info-block">
                <h4 className="contact-user-title">Почта</h4>
                <span className="contact-user-span">{profile?.email}</span>
              </div>
            )}
          </>
        </div>
      </div>
    </div>
  );
};
