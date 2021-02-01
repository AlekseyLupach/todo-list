const template = `
<div class="registation-form">
<h3> Registration Form</h3>
    <form>
        <input name="email"  placeholder="Email"/>
        <span class="error"></span>

        <input name="password" type="password" placeholder="Password"/>
        <span class="error"></span>

        <input name="repeatPassword" type="password" placeholder="Repeat password"/>
        <span class="error"></span>

        <button type="submit">CREATE ACCOUNT</button>

        <label>Alredy have accont?  <a href="/login">Sing in</a></label>
    </form>
</div>
`;

export default template;