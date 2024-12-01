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
  // console.log(skills);
  return (
    <div>
      <ul className="skill-list">
        {skills.map((s, i) => (
          <li key={i}>
            <SkillButton {...s} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function SkillButton({ name, level, color }) {
  console.log(name, level, color);
  return (
    <button style={{ backgroundColor: color }}>
      {name}
      {level === "advanced" ? "💀" : level === "intermediate" ? "👍" : "🫡"}
    </button>
  );
}
