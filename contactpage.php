<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Us - Run Your Own Race</title>
    <style>
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        
        body {
            font-family: 'Arial', sans-serif;
            background-color: #b3c6ff;
            color: #333;
        }
        
        header {
            background-color: #2b2b2b;
            color: #fff;
            display: flex;
            align-items: center;
            padding: 30px;
        }
            
        .logo {
            width: 60px;
            height: 40px; 
            background-color:#2b2b2b; 
            border-radius:50%; 
            margin-right: 20px; 
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .logo img {
            width: 100%; 
            height: 100%;
            border-radius: 50%; 
        }

        .title {
            flex: 1; 
            text-align: center;
        }
        .container {
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
            padding: 20px;
            margin: 20px;
            text-align: center;
        }

        h1 {
            font-size: 24px;
        }

        p {
            line-height: 1.6;
        }

        
        .contact-form {
            max-width: 400px;
            margin: 0 auto;
        }

        input[type="text"],
        input[type="email"],
        textarea,
        button {
            width: 100%;
            padding: 10px;
            margin: 10px 0;
            border: 1px solid #ccc;
            border-radius: 5px;
        }

        button {
            background-color:#4169E1;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        button:hover {
            background-color: #e64a19;
        }
    </style>
</head>
<body>
    <header>
        <div class="logo">
          <a href="index.html"><img src="uplogo.png" alt="Logo"></a>
        </div>
        <div class="title">
         <h1>Contact Us - Run Your Own Race</h1>
        </div>
    </header>

    <div class="container">
        <h2>Have a Question?</h2>
        <p>Feel free to get in touch with us. We are here to help you with your JEE Main course inquiries.</p>
    </div>

    <div class="container contact-form">
        <h2>Contact Form</h2>
        <form  action="contactdb.php"  method="POST">
            <input type="text" name="name" placeholder="Your Name" id="name" required>
            <input type="email" name="email" placeholder="Your Email" id="email" required>
            <textarea name="message" rows="4" placeholder="Your Message" id="message" required></textarea>
            <button type="submit" name="submit" id="submit">Send Message</button>
        </form>
    </div>

    <div class="container">
        <h2>Contact Information</h2>
        <p>If you prefer, you can also contact us using the information below:</p>
        <p><b>Email:</b> contact@runyourownrace.com</p>
        <p><b>Phone:</b> +91 7092345672</p>
    </div>
</body>
</html>