// JavaScript Document
function pilih_kota(){
	var pilihan_kota=document.getElementById('pilihan_kota');
	var kota=pilihan_kota.value;
	if(kota==1){geo=[-2.63000000,140.58000000,134.35];timezone=+9}
	else if(kota==2){geo=[-7.25599000,110.40658500,520.42];timezone=+7}
	else if(kota==3){geo=[-3.65607000,128.16641900,112.15];timezone=+9}
	else if(kota==4){geo=[-9.10106900,124.89099900,342.87];timezone=+8}
	else if(kota==5){geo=[-7.10089010,112.17685950,11.83];timezone=+7}
	else if(kota==6){geo=[-1.26353890,116.82788330,72.56];timezone=+8}
	else if(kota==7){geo=[5.54618200,95.31905400,8.09];timezone=+7}
	else if(kota==8){geo=[-5.45000000,105.26666670,7.72];timezone=+7}
	else if(kota==9){geo=[-6.91474440,107.60981110,716.71];timezone=+7}
	else if(kota==10){geo=[-7.02475040,112.74919060,2.95];timezone=+7}
	else if(kota==11){geo=[-3.32849900,114.58920300,5.90];timezone=+8}
	else if(kota==12){geo=[-7.88592990,110.33048830,51.00];timezone=+7}
	else if(kota==13){geo=[-7.52855270,109.29922810,24.75];timezone=+7}
	else if(kota==14){geo=[-8.21025620,114.37351070,11.95];timezone=+7}
	else if(kota==15){geo=[1.03000000,103.92000000,3.07];timezone=+7}
	else if(kota==16){geo=[-6.23333330,107.00000000,17.00];timezone=+7}
	else if(kota==17){geo=[-3.80064900,102.25620300,9.80];timezone=+7}
	else if(kota==18){geo=[-1.16143800,136.04741900,0.00];timezone=+9}
	else if(kota==19){geo=[-8.46056600,118.72740200,32.60];timezone=+8}
	else if(kota==20){geo=[3.59861110,98.48027780,36.84];timezone=+7}
	else if(kota==21){geo=[5.20184790,96.70757120,19.00];timezone=+7}
	else if(kota==22){geo=[-8.07288000,112.16649600,214.00];timezone=+7}
	else if(kota==23){geo=[-6.97114010,111.42116790,90.09];timezone=+7}
	else if(kota==24){geo=[-6.58916600,106.79299900,250.89];timezone=+7}
	else if(kota==25){geo=[-7.16252590,111.86896750,20.81];timezone=+7}
	else if(kota==26){geo=[-6.48000000,107.78000000,40.37];timezone=+7}
	else if(kota==27){geo=[-7.91175000,113.82178800,261.36];timezone=+7}
	else if(kota==28){geo=[-4.53877200,120.32499700,33.98];timezone=+8}
	else if(kota==29){geo=[0.13569700,117.49859600,4.00];timezone=+8}
	else if(kota==30){geo=[-7.51729100,110.59344100,459.51];timezone=+7}
	else if(kota==31){geo=[-6.87212200,109.04312600,7.25];timezone=+7}
	else if(kota==32){geo=[-7.05000000,109.55000000,21.17];timezone=+7}
	else if(kota==33){geo=[-0.26695000,100.38347900,881.42];timezone=+7}
	else if(kota==34){geo=[-7.24409800,109.00638700,185.17];timezone=+7}
	else if(kota==35){geo=[-7.14854000,111.59477500,31.27];timezone=+7}
	else if(kota==36){geo=[-6.81181200,107.14541230,447.66];timezone=+7}
	else if(kota==37){geo=[-6.25130040,107.16626910,11.71];timezone=+7}
	else if(kota==38){geo=[-7.34000000,109.00000000,239.61];timezone=+7}
	else if(kota==39){geo=[-5.93639600,106.00640100,79.02];timezone=+7}
	else if(kota==40){geo=[-6.71666670,108.56666670,6.28];timezone=+7}
	else if(kota==41){geo=[-6.89469440,110.63861510,6.18];timezone=+7}
	else if(kota==42){geo=[-8.65629000,115.22209900,29.44];timezone=+8}
	else if(kota==43){geo=[-6.39184090,106.80603880,86.36];timezone=+7}
	else if(kota==44){geo=[1.66574200,101.44760100,1.33];timezone=+7}
	else if(kota==45){geo=[-8.85405300,121.65419800];timezone=+8}
	else if(kota==46){geo=[-7.24839740,107.90965160,823.93];timezone=+7}
	else if(kota==47){geo=[-7.60839200,109.51830870,24.28];timezone=+7}
	else if(kota==48){geo=[0.53333330,123.06666670,10.42];timezone=+8}
	else if(kota==49){geo=[-7.16076470,112.64705480,16.58];timezone=+7}
	else if(kota==50){geo=[-6.39269460,108.28754480,6.20];timezone=+7}
	else if(kota==51){geo=[-6.21154400,106.84517200,10.22];timezone=+7}
	else if(kota==52){geo=[-1.59667200,103.61579900,18.61];timezone=+7}
	else if(kota==53){geo=[-2.54127900,140.71373000,11.60];timezone=+9}
	else if(kota==54){geo=[-8.17377570,113.69523220,85.37];timezone=+7}
	else if(kota==55){geo=[-6.59344980,110.66845010,6.64];timezone=+7}
	else if(kota==56){geo=[-8.43916620,115.60910280,132.03];timezone=+8}
	else if(kota==57){geo=[-7.66935250,109.65102600,27.66];timezone=+7}
	else if(kota==58){geo=[-7.81689500,112.01139800,71.67];timezone=+7}
	else if(kota==59){geo=[-3.96748890,122.59470000,64.60];timezone=+8}
	else if(kota==60){geo=[-7.70202100,110.60278820,166.01];timezone=+7}
	else if(kota==61){geo=[-3.10000000,114.35000000,5.52];timezone=+7}
	else if(kota==62){geo=[4.28571680,98.05933810,16.21];timezone=+7}
	else if(kota==63){geo=[-6.80834510,110.84179770,25.67];timezone=+7}
	else if(kota==64){geo=[-8.72547800,115.17793900,8.35];timezone=+8}
	else if(kota==65){geo=[-7.11234440,112.41742430,7.10];timezone=+7}
	else if(kota==66){geo=[4.48000000,97.96333330,7.00];timezone=+7}
	else if(kota==67){geo=[5.18805560,97.14027780,5.08];timezone=+7}
	else if(kota==68){geo=[-3.29666670,102.86166670,140.84];timezone=+7}
	else if(kota==69){geo=[-8.13322100,113.22260400,56.68];timezone=+7}
	else if(kota==70){geo=[-7.62971400,111.51370200,68.52];timezone=+7}
	else if(kota==71){geo=[-7.48125300,110.21379900,366.38];timezone=+7}
	else if(kota==72){geo=[-7.65346870,111.32959430,361.03];timezone=+7}
	else if(kota==73){geo=[-6.83401240,108.22763110,126.10];timezone=+7}
	else if(kota==74){geo=[-5.12057330,119.48756680,4.00];timezone=+8}
	else if(kota==75){geo=[-7.98189400,112.62650300,450.76];timezone=+7}
	else if(kota==76){geo=[1.49305560,124.84126110,14.84];timezone=+8}
	else if(kota==77){geo=[-0.86152200,134.07879600,49.64];timezone=+9}
	else if(kota==78){geo=[-3.41159800,114.84520000,11.17];timezone=+8}
	else if(kota==79){geo=[-8.58333330,116.11666670,25.17];timezone=+8}
	else if(kota==80){geo=[-8.62084300,122.20770300,22.00];timezone=+8}
	else if(kota==81){geo=[3.58524200,98.67559790,25.59];timezone=+7}
	else if(kota==82){geo=[-8.49599400,140.39450100,6.69];timezone=+9}
	else if(kota==83){geo=[4.13620900,96.12487800,0.79];timezone=+7}
	else if(kota==84){geo=[-7.47222220,112.43361110,24.93];timezone=+7}
	else if(kota==85){geo=[-3.35841800,135.49569700,0.00];timezone=+9}
	else if(kota==86){geo=[-7.59997540,111.89934260,58.73];timezone=+7}
	else if(kota==87){geo=[-0.95373000,100.35199700,0.19];timezone=+7}
	else if(kota==88){geo=[-2.22666700,113.94416700,13.04];timezone=+7}
	else if(kota==89){geo=[-2.99110830,104.75673330,8.78];timezone=+7}
	else if(kota==90){geo=[-0.89858300,119.85060100,14.97];timezone=+8}
	else if(kota==91){geo=[-7.16225370,113.48300110,15.47];timezone=+7}
	else if(kota==92){geo=[-7.65030400,112.70570400,146.73];timezone=+7}
	else if(kota==93){geo=[-2.12000000,106.10000000,10.70];timezone=+7}
	else if(kota==94){geo=[-7.64487200,112.90329700,9.57];timezone=+7}
	else if(kota==95){geo=[0.53333330,101.45000000,13.74];timezone=+7}
	else if(kota==96){geo=[2.95702400,99.06474300,396.80];timezone=+7}
	else if(kota==97){geo=[-3.39284780,119.36155930,140.53];timezone=+8}
	else if(kota==98){geo=[-7.87220560,111.46129430,102.47];timezone=+7}
	else if(kota==99){geo=[-0.02252300,109.33030700,2.40];timezone=+7}
	else if(kota==100){geo=[-1.40237930,120.75821780,16.83];timezone=+7}
	else if(kota==101){geo=[-7.69009400,112.64402700,564.42];timezone=+7}
	else if(kota==102){geo=[-7.75692800,113.21150200,13.20];timezone=+7}
	else if(kota==103){geo=[5.88803400,95.31652800,3.70];timezone=+7}
	else if(kota==104){geo=[-0.50218300,117.15380100,5.23];timezone=+8}
	else if(kota==105){geo=[-7.19131290,113.25322670,3.25];timezone=+7}
	else if(kota==106){geo=[-2.53111400,112.95620000,6.40];timezone=+7}
	else if(kota==107){geo=[-6.96666670,110.41666670,6.87];timezone=+7}
	else if(kota==108){geo=[-6.14739858,106.09154789,29.01];timezone=+7}
	else if(kota==109){geo=[1.74026600,98.78354600,19.18];timezone=+7}
	else if(kota==110){geo=[5.37567500,95.94257500,9.82];timezone=+7}
	else if(kota==111){geo=[0.90879500,108.98459600,2.36];timezone=+7}
	else if(kota==112){geo=[-7.70298100,114.01477000,37.28];timezone=+7}
	else if(kota==113){geo=[-7.28916600,112.73439800,7.51];timezone=+7}
	else if(kota==114){geo=[-7.56666670,110.81666670,94.87];timezone=+7}
	else if(kota==115){geo=[-8.54504000,115.11996000,108.80];timezone=+8}
	else if(kota==116){geo=[-6.17830560,106.63188890,16.76];timezone=+7}
	else if(kota==117){geo=[3.27609000,117.61940000,18.25];timezone=+8}
	else if(kota==118){geo=[-7.33333330,108.20000000,371.37];timezone=+7}
	else if(kota==119){geo=[0.78806800,127.37715600,51.80];timezone=+9}
	else if(kota==120){geo=[0.68333330,127.40000000,508.60];timezone=+9}
	else if(kota==121){geo=[-8.07640780,111.70603560,112.12];timezone=+7}
	else if(kota==122){geo=[-6.89958400,112.04617000,23.23];timezone=+7}
	else if(kota==123){geo=[-8.49738810,115.26584240,243.78];timezone=+8}
	else if(kota==124){geo=[-7.12753580,110.40448120,317.01];timezone=+7}
	else if(kota==125){geo=[-9.66280600,120.26689900,19.85];timezone=+8}
	else if(kota==126){geo=[-7.36502270,109.90222730,773.56];timezone=+7}
	else if(kota==127){geo=[-7.79722400,110.36879700,113.31];timezone=+7}
	}
	
function jadwal_sholat(){
	prayTimes.tune({imsak:2,subuh:2,dhuhur:2,ashar:2,maghrib:2,isya:2});
	var date=new Date();
	var times=prayTimes.getTimes(date,geo,timezone);
	var list=["Subuh","Dhuhur","Ashar","Maghrib","Isya"];
	var thisday=date.getDay();
	var thismonth=date.getMonth();
	var thisdate=date.getDate();
	var thisyear=date.getFullYear();
	var months=new Array("Januari","Pebruari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","Nopember","Desember");
	var name_of_days=new Array("Minggu","Senin","Selasa","Rabu","Kamis","Jum"+"'"+"at","Sabtu");
	var day_name=name_of_days[thisday];
	var monthname=months[thismonth];
	var tanggal=day_name+", "+thisdate+" "+monthname+" "+thisyear;
	
	if(timezone==+7){tz="WIB"}
	else if(timezone==+8){tz="WITA"}
	else if(timezone==+9){tz="WIT"}
	else tz="";
	
	var html='<table id="timetable">';html+='<tr><th colspan="3">'+tanggal+'</th></tr><tr class="blank_row"><td colspan="3"></td></tr>';
	
	for(var i in list){
		html+='<tr><td style="text-align:left">'+list[i]+'</td>';
		html+='<td style="width:auto;text-align:center;"><strong>:</strong></td>';
		html+='<td style="width:47%;text-align:right">'+times[list[i].toLowerCase()]+' '+' '+tz+'</td></tr>'};
		html+='</table>';
		document.getElementById('table-jdw-sholat').innerHTML=html;
	}
	
	function widget_jadwal_sholat(){
		pilih_kota();
		jadwal_sholat();
	}