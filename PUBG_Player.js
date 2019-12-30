var player = ()=>{
return {
    weaponType: "",
    mkitValue:"",
    levelno:"",
    playerName:"",
    setName:function(name){
        this.playerName=name;
     },
     setWeaponType:function(wcls,totalAmmo,ammo,weaponNam,wnam,magRnd,bround,fmode,mod){
        totalAmmo(ammo);
        weaponNam(wnam);
        magRnd(bround);
        fmode(mod);

     },
     setMediKit:function(mkit){
            if (0>mkit>100){
                return "invalid value"
            }else{
                this.mkitValue=mkit;
            }
      },
    setLevel:function(lvl){
        if(1<lvl<5){
            this.levelno=lvl;
        }else{
            return "invalid level";
         }
     },
    shoot:function(){
        console.log(this.playerName+" shoots with weapon "+this.weaponType);
       },
       health:function(){
        console.log(this.playerName+"'s health is at "+this.mkitValue);
        },
    levelfn:function(){
        console.log(this.playerName+" is at level "+this.levelno);
        }
     };
};



var weapon = ()=>{
return {
    weaponName:["akm","scarL","m416","dp-28","SKS","AWM", "UMP-09","Pan", "crossbow"],
    setTotalAmmo:function (amm){
        if(amm>200){
            console.log("invalid amount of Ammo");
        }else{
            this.Tammo=amm;
        }
    },

     setWeaponName:function(wepname){
        for (i=0;this.weaponName[i];i++){
            if(wepname!=this.weaponName[i]){
                console.log("Invalid Weapon");
            }else{
                this.wName=wepname;
            }
        }
    },

    setMagRound:function(bulletRound){
        this.magRound=bulletRound;
    },

    setFireMode: function(mode){
        if (mode=="auto"||"semi auto"){
            this.firemode=mode;
        }else{
            console.log("invalid mode");
        }
    },
    }
}

wcls=weapon();


p1=player();
p1.setName("Syed");
p1.setWeaponType(wcls, wcls.setTotalAmmo,150,wcls.setWeaponName,"AWM",wcls.setMagRound,30,wcls.setFireMode,"auto");
p1.setMediKit(90);
p1.setLevel(4);
p1.shoot();
p1.health();
p1.levelfn();