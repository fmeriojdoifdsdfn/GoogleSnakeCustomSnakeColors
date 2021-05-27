window.snake.customColor = function(settings = {}) {
	if(settings.rainbow === undefined)
		settings.rainbow = [ '#4E7CF6', '#5499C7', '#AF7AC5', '#E74C3C', '#F39C12', '#CCC31C', '#27AE60', ];
	if(settings.rainbowYinYang === undefined)
		settings.rainbowYinYang = [ '#808080', '#9E9E9E', '#808080', '#616161', ];
	
  const scripts = document.body.getElementsByTagName('script');
	for(let script of scripts) {
		const req = new XMLHttpRequest();
		req.open('GET', script.src);
		req.onload = function() {
			if(!this.responseText.includes('"#A2'))
				return;
				
			if(settings.gradient !== undefined)
				eval(
					this.responseText.match(
						/[a-zA-Z0-9_$]{1,6}[^]?=[^]?\[\["#4E7CF6","#17439F"\][^]*?\]\]/
					)[0].replace(
						'["#4E7CF6","#17439F"]',
						`[ '${settings.gradient[0]}', '${settings.gradient[1]}', ]`
					).replace(
						'["#F69C3C","#EA7E0B"]',
						settings.gradientYinYang !== undefined
							? `[ '${settings.gradientYinYang[0]}', '${settings.gradientYinYang[1]}', ]`
						:
							'["#F69C3C", "#EA7E0B"]'
					)
				);
			
			const c = this.responseText.match( 
				/[a-zA-Z0-9_$]{1,6}[^]?=[^]?"#4E7CF6 #5499C7 #AF7AC5 #E74C3C #F39C12 #CCC31C #27AE60"\.split\(" "\)/
			)[0];
			eval(
				c.replace(
					`"#4E7CF6 #5499C7 #AF7AC5 #E74C3C #F39C12 #CCC31C #27AE60"`,
					`"${settings.rainbow.join(' ')}"`
				)
			);
			eval(
				this.responseText.match(
					/[a-zA-Z0-9_$]{1,6}[^]?=[^]?\["#808080","#9E9E9E","#808080","#616161"\]/
				)[0].replace(
					/\["#808080","#9E9E9E","#808080","#616161"\]/,
					`'${settings.rainbowYinYang.join(' ')}'.split(' ')`
				)
			);
			const r0 = /0===this\.[a-zA-Z0-9_$]{1,6}\|\|10===this\.[a-zA-Z0-9_$]{1,6}/;
			const bb = this.responseText.match(r0)[0].match(/this\.[a-zA-Z0-9_$]{1,6}/)[0];
			const r1 = /var a=[a-zA-Z0-9_$]{1,6}\[this\.[a-zA-Z0-9_$]{1,6}\]/;
			const m = this.responseText.match(r1)[0];
			eval(
				this.responseText.match(
					/[a-zA-Z0-9_$]{1,6}\.prototype\.[a-zA-Z0-9_$]{1,6}=function\(\){[^}]*if\(0===this\.[a-zA-Z0-9_$]{1,6}\|\|10===this\.[a-zA-Z0-9_$]{1,6}\)[^]*return [a-zA-Z0-9_$]{1,6}\(this\)}/
				)[0].replace(
					r0,
					'false'
				).replace(
					r1,
					m.replace('var a=', `var a=10===${bb}?${c.match(/[a-zA-Z0-9_$]{1,6}/)[0]}:`)
				)
			);
		};
		req.send();
	}
  

	
};

window.snake.flag = function(settings = {}) {
	let p = [];
	for(let color of (settings.primary || [ '#4E7CF6', '#5499C7', '#AF7AC5', '#E74C3C', '#F39C12', '#CCC31C', '#27AE60', ]))
		for(let i = 0; i < 3; i++)
			p.push(color);
	let s = [];
	for(let color of (settings.yinYang || [ '#808080', '#9E9E9E', '#808080', '#616161', ]))
		for(let i = 0; i < 3; i++)
			s.push(color);
	return window.snake.customColor({ rainbow: p, rainbowYinYang: s, });
};

window.snake.pride = function(ori = 'gay', ori2 = '') {
	let primary, secondary;
	switch(ori.toLowerCase()) {
		case 'gay':
		case 'homo':
		case 'homosexual':
		case 'pride':
		case 'lgbt':
		case 'lgbtq':
		case 'lgbtq+':
		case 'lgbtqia+':
		case 'alphabet mafia':
			primary = [ '#e40303', '#ff8c00', '#ffed00', '#008026', '#004dff', '#750787', ];
			break;
		case 'bi':
		case 'bisexual':
			primary = [ '#D60270', '#9B4F96', '#0038A8', ];
			break;
		case 'trans':
		case 'transgender':
			primary = [ '#55CDFC', '#ffffff', '#F7A8B8', ];
			break;
		case 'pan':
		case 'pansexual':
			primary = [ '#FF1B8D', '#FFDA00', '#1BB3FF', ];
			break;
		case 'asexual':
			primary = [ '#000000', '#a3a3a3', '#ffffff', '#810082', ];
			break;
		case 'aro':
		case 'aromantic':
			primary = [ '#3AA63F', '#A8D47A', '#FFFFFF', '#AAAAAA', '#000000', ];
			break;
		case 'intersex':
			primary = [ '#FFDA00', '#7A00AC', ];
			break;
		case 'lesbian':
			primary = [ '#D62900', '#FF9B55', '#FFFFFF', '#D461A6', '#A50062', ];
			break;
		case 'enby':
		case 'non-binary':
		case 'nonbinary':
			primary = [ '#000000', '#fff433', '#ffffff', '#9b59d0', ];
			break;
		default:
			primary = [ '#ff5a00', ];
			console.log('idk that one; if it actually exists and you didn\'t just type it wrong, dm me on dc');
	}

	switch(ori2) {
		case '':
			secondary = [ '#808080', '#9E9E9E', '#808080', '#616161', ];
			break;
		case 'gay':
		case 'homo':
		case 'homosexual':
		case 'pride':
		case 'lgbt':
		case 'lgbtq':
		case 'lgbtq+':
		case 'lgbtqia+':
		case 'alphabet mafia':
			secondary = [ '#e40303', '#ff8c00', '#ffed00', '#008026', '#004dff', '#750787', ];
			break;
		case 'bi':
		case 'bisexual':
			secondary = [ '#D60270', '#9B4F96', '#0038A8', ];
			break;
		case 'trans':
		case 'transgender':
			secondary = [ '#55CDFC', '#ffffff', '#F7A8B8', ];
			break;
		case 'pan':
		case 'pansexual':
			secondary = [ '#FF1B8D', '#FFDA00', '#1BB3FF', ];
			break;
		case 'asexual':
			secondary = [ '#000000', '#a3a3a3', '#ffffff', '#810082', ];
			break;
		case 'aro':
		case 'aromantic':
			secondary = [ '#3AA63F', '#A8D47A', '#FFFFFF', '#AAAAAA', '#000000', ];
			break;
		case 'intersex':
			secondary = [ '#FFDA00', '#7A00AC', ];
			break;
		case 'lesbian':
			secondary = [ '#D62900', '#FF9B55', '#FFFFFF', '#D461A6', '#A50062', ];
			break;
		case 'enby':
		case 'non-binary':
		case 'nonbinary':
			secondary = [ '#000000', '#fff433', '#ffffff', '#9b59d0', ];
			break;
		default:
			secondary = [ '#0095ff', ];
			console.log('idk that one; if it actually exists and you didn\'t just type it wrong, dm me on dc');
	}

	return window.snake.flag({ primary: primary, yinYang: secondary, });
};


