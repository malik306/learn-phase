function Stopwatch() {
    let data = {startTime:0,endTime:0,running:0,duration:0};
    //let duration = 0;
    this.start=function(){
        if (data.running) 
        throw new Error('Stopwatch has already started ');
            data.running=true;
            data.startTime= new Date();
    };
    this.stop=function(){
        if (!data.running) 
            throw new Error('Stopwatch has already stopped');
            data.running=false;
            data.endTime= new Date();
            const sec =(data.endTime.getTime() - data.startTime.getTime())/1000;
            data.duration+=sec;
    };
    this.reset=function(){
        data.duration=0;
        data.endTime=null;
        data.startTime=null;
        data.running=false;
    };
    Object.defineProperty(this,'duration',{
        get:function(){ return data.duration; }
    })
}
const stop=new Stopwatch();
