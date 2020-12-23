<!DOCTYPE html>
<html>
<head>
	<title>Criar Publicação</title>
	<link rel="stylesheet" type="text/css" href="assets/css/style.css">
</head>
<body>
	<div class="box_form">
		<h1>Criar Publicação:</h1>
		
		<form id="form1" method="post" enctype="multipart/form-data" action="insert-publish.php">
			<input type="text" name="title" id="title" placeholder="Título"><br><br>

			<textarea id="message" name="message" placeholder="Mensagem"></textarea><br><br>

			<input type="file" name="photo" id="photo"><br><br>

			<input type="submit" value="Criar Publicação">
		</form>
	</div>
</body>
</html>