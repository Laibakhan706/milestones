<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resume Builder</title>
    <link rel="stylesheet" href="style.css">

</head>
<body>
    <h1>Static Resume By Laiba Khan</h1>
    <form id="resumeForm">

        <fieldset>
            <legend>
                Personal Information
            </legend>
            <label for="name" >Name:</label>
            <input type="text" id="name" name="name" required><br>

            <label for="email">Email: </label>
            <input type="email" id="email" name="email"required >

            <label for="phone">phone: </label>
            <input type="phone" id="phone" name="phone" required>

                    </fieldset>
                    <legend>Education</legend>
                    <label for="education">Education</label>
                    <textarea id="education" name="education" rows="4" required></textarea>

                    <fieldset>
                        <legend>Experience</legend>
                        <label for="experience">Experience</label>
                        <textarea id="experience" name="experience" rows="4" required></textarea>
    
        
                    </fieldset>
                    <legend>Skills</legend>
                    <label for="skills">Skills</label>
                    <textarea id="skills" name="skills" rows="4" required></textarea>

                </fieldset>

                <button type ="submit"> Generate Resume Below </button>
        
    </form>
</body>
</html>