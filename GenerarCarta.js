function getCarta() {
    var espacios = [[], [], [], [], []];

    for (var i = 0; i < espacios.length; i++){
        var min = (i + 15) + 1;
        var max = min + 15;
         while(espacios[i].length < 5) {
            var num = Math.floor(Math.random() * (max - min)) + min;
			if (!espacios[i].includes(num))
			{
                espacios[i].push(num);
            }
        }
        espacios[i].sort((a,b) => a - b);
    }
    espacios[2][2] = 'FREE';
    return espacios;
}

function carta(){
    return [getCarta()]
}

var creacionCarta = carta();
var html = '';
creacionCarta.forEach(card => {
    html += `
      <table>
		<thead>
			<tr>
				<th>B</th>
				<th>I</th>
				<th>N</th>
				<th>G</th>
				<th>O</th>
			</tr>
		</thead>
      <tbody>`;
    for (var i = 0; i < 5; i++) {
        html += `
			<tr>
				<td>${card[0][i]}</td>
				<td>${card[1][i]}</td>
				<td>${card[2][i]}</td>
				<td>${card[3][i]}</td>
				<td>${card[4][i]}</td>
			</tr>
        `;
    }
    html += '</tbody></table>';
});
document.querySelector('#carton').innerHTML=html;