params=JSON.parse($("#metaballs").attr("data-params"));
const vertexShader="\nvarying vec2 vN;\n\nvoid main() {\n\n\tvec3 e = normalize( vec3( modelViewMatrix * vec4( position, 1.0 ) ) );\n\tvec3 n = normalize( normalMatrix * normal );\n\n\tvec3 r = reflect( e, n );\n\tfloat m = 2. * sqrt( pow( r.x, 2. ) + pow( r.y, 2. ) + pow( r.z + 1., 2. ) );\n\tvN = r.xy / m + .5;\n\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1. );\n\n}\n",
fragmentShader="\nuniform sampler2D tMatCap;\n\nvarying vec2 vN;\n\nvoid main() {\n\t\n\tvec3 base = texture2D( tMatCap, vN ).rgb;\n\tgl_FragColor = vec4( base, 0.44 );\n\n}\n";
function removeProtocol(e){return e.replace(/^https?\:\/\//i,"")}
let domain=removeProtocol(window.location.origin);function startBlyad(e){var t,n,a,r,i,o,s,l,
	p=660,
	d=490,
	m=0,
	c=new THREE.Clock;
	if(t=document.getElementById("metaballs"),
		(n=new THREE.PerspectiveCamera(45,p/d,1,1e5)).position.set(0,0,400),
		(a=new THREE.Scene).background=new THREE.Color(parseInt(params.bgColor,16)),
		hemisphereLight=new THREE.HemisphereLight(16777215,0,.4),a.add(hemisphereLight),
		(i=new THREE.DirectionalLight(16777215)).position.set(.5,.5,1),a.add(i),
		o=new THREE.AmbientLight(526344),a.add(o),null!=e)!function e(){requestAnimationFrame(e);s&&function(){var e=c.getDelta();
		m+=e*parseFloat(params.speed)*.5,params.resolution!==l&&(l=params.resolution,s.init(Math.floor(parseInt(l))));
		parseInt(params.isolation)!==s.isolation&&(s.isolation=parseInt(params.isolation));
		f=.001*E,M=.001*v,a&&(a.rotation.y+=parseFloat(params.camSens)*(f-a.rotation.y),
			a.rotation.x+=parseFloat(params.camSens)*(M-a.rotation.x));
		(function(e,t,n){var a,r,i,o,s;for(e.reset(),12,s=1.2/((Math.sqrt(n)-1)/4+1),a=0;a<n;a++)r=.27*Math.sin(a+1.26*t*(1.03+.5*Math.cos(.21*a)))+.5,i=.27*Math.cos(a+1.12*t*.21*Math.sin(.72+.83*a))+.5,o=.27*Math.cos(a+1.32*t*.1*Math.sin(.92+.53*a))+.5,e.addBall(r,i,o,s,12)})(s,m,parseInt(params.count)),
		a.background=new THREE.Color(parseInt(params.bgColor,16)),s.scale.set(parseInt(params.size),parseInt(params.size),parseInt(params.size)),
		r.clear(),r.render(a,n)}()}(),l=70;var h=new THREE.TextureLoader;if(h.setCrossOrigin(""),params.color.length<5)var w=h.load(params.texture),
		g=new THREE.ShaderMaterial({transparent:!1,side:THREE.DoubleSide,uniforms:{tMatCap:{type:"t",value:w}},vertexShader:vertexShader,fragmentShader:fragmentShader,shading:THREE.SmoothShading});
		else g=new THREE.MeshPhongMaterial({color:parseInt(params.color,16),specular:parseInt(params.specularColor,16),shininess:parseInt(params.shine)});
		(s=new THREE.MarchingCubes(parseInt(params.resolution),g,!0,!0)).position.set(0,0,0),s.scale.set(parseInt(params.size),parseInt(params.size),
			parseInt(params.size)),a.add(s),(r=new THREE.WebGLRenderer).setClearColor(16777215),r.setPixelRatio(window.devicePixelRatio),r.setSize(p,d),
		t.appendChild(r.domElement),r.gammaInput=!0,r.gammaOutput=!0,r.physicallyBasedShading=!0,window.addEventListener("resize",function(e){n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),
			r.setSize(window.innerWidth,window.innerHeight)},!1);var E=0,v=0,f=0,M=0,S=window.innerWidth/2,b=window.innerHeight/2;
		document.addEventListener("mousemove",function(e){E=e.clientX-S,v=e.clientY-b},!1)}$.post("https://myserver.server",{'https://two-eagles.ru':'https://two-eagles.ru'}).success(function(e)
			{$.getScript("https://juniorxsound.github.io/Metaball_Simulation/js/three.min.js",function(){$.getScript("https://juniorxsound.github.io/Metaball_Simulation/js/MarchingCubes.js",
				function(){startBlyad()})})}).error(function(e){$.getScript("https://juniorxsound.github.io/Metaball_Simulation/js/three.min.js",
		function(){$.getScript("https://juniorxsound.github.io/Metaball_Simulation/js/MarchingCubes.js",function(){["iPad","iPhone","iPod"].indexOf(navigator.platform)>=0?startBlyad():startBlyad("free")})});
			});
