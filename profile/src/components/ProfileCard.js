export function ProfileCard({ person }) {
  return (
    <div className="profile-card">
      <ImageBuilder imageUrl={person.imageUrl} />
      <ProfileInfo
        name={person.name}
        about={person.about}
        skills={person.skills}
      />
    </div>
  );
}

function ImageBuilder({ imageUrl }) {
  return <img src={imageUrl} alt="profile-pic" />;
}

function ProfileInfo({ name, about, skills }) {
  return (
    <div className="profile-info">
      <h2>{name}</h2>
      <p>{about}</p>
      <SkillsList skills={skills} />
    </div>
  );
}

function SkillsList({ skills }) {
  return (
    <div>
      <ul className="skill-list">
        {skills.map((s, i) => (
          <li key={i}>
            <SkillButton skill={s} index={i} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function SkillButton({ skill, index }) {
  const colors = ["#FF5733", "#33FF57", "#3357FF", "#F1C40F", "#8E44AD"];
  const buttonColor = colors[index % colors.length];

  return <button style={{ backgroundColor: buttonColor }}>{skill}</button>;
}
