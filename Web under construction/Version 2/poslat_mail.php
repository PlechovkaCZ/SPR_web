<?php
	if (ereg("^.+@.+\\..+$", $_POST['email']))
	{ 
?>
  
 <html>
	<script>		location.href="http://sprintprotiradaru.cz/index_poodesla	niok.html?"
	</script>
</html>

<?php   
	 
		$to = "info@sprintprotiradaru.cz";
		$extra = "From: ".$_POST['email']."\r\nReply-To: ".			$_POST['email']."\r\n";
		$subject = "Dotaz od ".$_POST['email']."";
		$mess ="Email: ".$_POST['email']."
			\nText:\n".$_POST['text']."";
				mail ($to, $subject, $mess, $extra);
}
	else {
?>
  
 <html>
	<script>		location.href="http://sprintprotiradaru.cz/index_poodesla	nifail.html?"
	</script>
</html>

<?php   
};
?>

	
<html>

<head>
		<meta http-equiv="refresh" content="5; 					url=index_poodeslani.html">
		<title>P�esm�rov�n�...</title>
	</head>
	
	<body>
	
	</body>
</html>