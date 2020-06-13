---
layout: layout.html
---

# Contact Me

Fill out this form to contact with me!

<form method="POST" netlify action="/thankyou/">
    <p>
        <label>
            Name:
            <input type="text" name="name" >
        </label>
    </p>
    <p>
        <label for="email">
            Email:
        </label>
        <input type="email" name="email"/>
    </p>
    <p>
        <label for="content">Content:</label>
        <textarea name="content" id="content"></textarea>
    </p>
    <input type="submit" value="Send Form">
</form>