var player = ()=>{
return {
    weaponType: "",
    mkitValue:"",
    levelno:"",
    playerName:"",
    setName:function(name){
        this.playerName=name;
     },
     setWeaponType:function(wep){
        if (0<wep<5){
            this.weaponType=wep;
        }else{
            return "invalid weapon type";
        }

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


p1=player();
p1.setName("Syed");
p1.setWeaponType(4);
p1.setMediKit(90);
p1.setLevel(4);
p1.shoot();
p1.health();
p1.levelfn();