import React from "react";
import "./ProfileComponent.scss";
import { useParams } from "react-router-dom";
import { Api } from "../../api";
import { RegistrationContext } from "../../context";

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
    </div>
  );
};
