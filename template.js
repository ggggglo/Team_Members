const generateMarkdown = ({names, manager, engineer, intern, id, email, number, test, github, school})


`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team</title>
</head>
<body>
    <header>My Team</header>
    
<main>
    <h2>${names}</h2>
    <h2>${manager}</h2>
    <h4>Employee ID: ${id} </h4>
    <h4>Email address: ${email}</h4>
    <h4>Office Number: ${number}</h4>

    <h2>${names}}</h2>
    <h2>${engineer}</h2>
    <h4>Employee ID: ${id} </h4>
    <h4>Email address: ${email}</h4>
    <h4>Office Number: ${github}</h4>

    <h2>${names}}</h2>
    <h2>${intern}</h2>
    <h4>Employee ID: ${id} </h4>
    <h4>Email address: ${email}</h4>
    <h4>Office Number: ${school}</h4>
</main>
</body>
</html>`