function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.auther} />
      <div className="Comment-text">{props.text}</div>
    </div>
  );
}

function Avatar(props) {
  return (
    <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />
  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.auther} />
      <div className="UserInfo-name">{props.author.name}</div>
    </div>
  );
}
