import React from "react";
import "./ProfileComponent.scss";
import { useParams } from "react-router-dom";
import { Api } from "../../api";
import { RegistrationContext } from "../../context";
import { RiCalendarLine } from "react-icons/ri";
import DiplomScan from "../../assets/img/Diplom.png";

export const ProfileComponent = () => {
  const { id } = useParams();
  const { user } = React.useContext(RegistrationContext);

  const isMe = id === user?.id;

  const [profile, setProfile] = React.useState(isMe ? user : null);

  const fetchUserProfile = async () => {
    try {
      const data = await Api.profile.getTeacherProfile(id);
      setProfile(data);
    } catch (error) {
      alert(error);
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
        <img src={profile?.photo} alt="Avatar" className="profile-avatar" />
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
              <h3 className="profile-header-text-name">Предмет:</h3>
              <h3 className="profile-header-text-desc">
                {profile?.discipline}
              </h3>
            </div>
            <div className="profile-header-text-box">
              <h3 className="profile-header-text-name">
                Классный руководитель:
              </h3>
              <h3 className="profile-header-text-desc">
                {profile?.class}
                {profile?.liter}
              </h3>
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
          <div className="education-level-block">
            <div className="education-level-info">
              <h4 className="education-level-info-title">
                Среднее образование
              </h4>
              <span className="education-level-info-span">
                СОШ 15А Средние Ачалуки
              </span>
              <span className="education-level-info-span-icon">
                <RiCalendarLine /> 12.12.1985 - 24.07.1995
              </span>
            </div>
            <div className="education-level-scan">
              <img src={DiplomScan} alt="" />
            </div>
          </div>
          <div className="education-level-block">
            <div className="education-level-info">
              <h4 className="education-level-info-title">Высшее образование</h4>
              <span className="education-level-info-span">
                СОШ 15А Средние Ачалуки
              </span>
              <span className="education-level-info-span-icon">
                <RiCalendarLine /> 12.12.1985 - 24.07.1995
              </span>
            </div>
            <div className="education-level-scan">
              <img src={DiplomScan} alt="" />
            </div>
          </div>
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
        <div className="experience-info-block">
          <div className="experience-info">
            <h4 className="experience-info-title">Учитель математики</h4>
            <span className="experience-info-span">
              СОШ 15А Средние Ачалуки
            </span>
            <span className="experience-info-span-icon">
              <RiCalendarLine /> 12.12.1985 - 24.07.1995
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
