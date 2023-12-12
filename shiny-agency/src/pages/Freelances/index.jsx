import DefaultPicture from '../../assets/profile.png'
import Card from '../../components/Card'

const freelanceProfiles = [
  {
    name: 'Jane Doe',
    jobTitle: 'Devops',
    picture: DefaultPicture,
  },
  {
    name: 'Dora la dominatrice',
    jobTitle: 'Developpeur Frontend',
    picture: DefaultPicture,
  },
  {
    name: 'Jeanne Bitch',
    jobTitle: 'Dictatrice',
    picture: DefaultPicture,
  },
]

function Freelances() {
  return (
    <div>
      <h1>Freelances 👩‍💻👨‍💻👩‍💻</h1>
      {freelanceProfiles.map((profile, index) => (
        <Card
          key={`${profile.name}-${index}`}
          label={profile.jobTitle}
          picture={profile.picture}
          title={profile.name}
        />
      ))}
    </div>
  )
}

export default Freelances
