import config from '../config.json';

export default function Header() {
  return (
    <div>
      <img src="`https://github.com/${config.github}.png`" alt="avatar img" />
      {config.name}
      {config.job}
    </div>
  )
}
