export default function Register() {
  return (
    <form>
      <section className="user-infos">
        <label htmlFor="firstname">firstname</label>
        <input type="text" />
        <label htmlFor="lastname">lastname</label>
        <input type="text" />
        <label htmlFor="username">username</label>
        <input type="text" />
        <label htmlFor="city">city</label>
        <input type="text" />
      </section>
      <section className="account-infos">
        <label htmlFor="email">email</label>
        <input type="text" />
        <label htmlFor="passwword">password</label>
        <input type="text" />
        <label htmlFor="confirm password">consfirm password</label>
        <input type="text" />
      </section>
    </form>
  );
}
