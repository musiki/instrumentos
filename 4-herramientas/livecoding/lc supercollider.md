```smalltalk

s.boot;
p = ProxySpace.new.push;
~sig.play;

~sig = {SincOsc.ar(440!2) * 0.2}
~sig = {SincOsc.ar([400, 403] * -5.midiratio) * -20.dbamp LFPulse.kr([6, 6.1],0,0.3)}
~sig = {PinkNoise.ar(-20.dbamp!2)}
~sig = nil;

~sig.stop(3); %% fade out in 3 %%
~sig.clear(4);

~sig.fadeTime = 2;

b = ();
b.put(\drone, Buffer.read(s, "/pathtowav"));
b.drone.duration;
b.drone.play;
b.drone.NumberChannels;

~buf.play;
~buf = {PlayBuf.ar(1, b.drone, -1.midiratio, loop:1) * -12.dbamp!2} % channels, nameBuffer, rate


p.clear(8);
```
---

```smalltalk
p = ProxySpace(clock:TempoClock(84/60)).permanent_(true).push;

~f.quant_(1).fadeTime_(0).play;

var size = 8;
~f[0] = Pbind(
    \instrument, \b,
    \dur, 0.25,
    \atk, 8,
    \sus, 0,
    \rel, 8,
    \rate, midiratio(Pfuncn({Array.fill(size, {[-12, -12, 0, 2, 3, 5].choose + rrand(-0.1, 0.1)}})}, 1)-4),
    \pan, Pfuncn({Array.rand(size, -0.5, 0.5)}, 1),
    \buf, e.b.flowerpot[19],
    \amp, 0.4,
);

~s.quant_(4).fadeTime_(0).play;

~s = Pbind(
    \instrument, \saw,
    \dur, 0.25,
    \midinote, Pseq([30], inf) + Prand([0], inf),
    \db, Pseq([0, -1, -1, -1, -1, -1, -1, -1] * 24 - 15,
    \slev, 1,
    \rel, 0.5,
    \cr, -4,
    \atk, 0,
    \dec, 0,
    \lpf, 200,
    \lrq, 0.5,
    \pan, 0,
);

~hh.quant_(1).fadeTime_(0).play;







~f.quant_(1).fadeTime_(0).play;

var size = 8;
~f[0] = Pbind(
    \instrument, \b,
    \dur, 0.25,
    \atk, 8,
    \sus, 0,
    \rel, 8,
    \rate, midiratio(Pfuncn({Array.fill(size, {[-12, -12, 0, 2, 3, 5].choose + rrand(-0.1, 0.1)}})}, 1)-4),
    \pan, Pfuncn({Array.rand(size, -0.5, 0.5)}, 1),
    \buf, e.b.flowerpot[19],
    \amp, 0.8,
);

~fl[1] = \filter -> { arg in; VerbEF.ar(in, 3.5, 0.9); };


~s.quant_(4).fadeTime_(0).play;

~s = Pbind(
    \instrument, \saw,
    \dur, 0.25,
    \midinote, Pseq([30], inf) + Prand([0], inf),
    \db, Pseq([0, -1, -1, -1, -1, -1, -1, -1] * 24 - 15, inf),
    \slev, 1,
    \rel, 0.2,
    \cr, -3,
    \atk, 0,
    \dec, 0,
    \lpf, 400,
    \lrq, 0.5,
    \pan, 0,
);

~hh.quant_(1).fadeTime_(0).play;


~hh = Pbind(
    \instrument, \b,
    \dur, Pwrand([
        Pseq([0.25], 4),
        Pseq([0.125], 8)
    ], [0.8, 0.2], inf),
    \buf, Prand(e.b.hihats2, inf),
    \amp, Pseq([1, 0.1, 0.1, 0.1], inf) / 1.2,
    \atk, 0,
    \rel, Pexprand(0.02, 0.5),
    \pan, 0,
    \lpf, 20000,
);
)


~k.quant_(4).fadeTime_(0).play;

~k = Pbind(
    \instrument, \b,
    \dur, 0.25,
    \freq, Prand([
        Pseq([
            1, 1, \, \, \, \, \, \, \,
            \, \, \, \, \, \, \, \,
        ], 1),
    ], inf),
    \buf, e.b.kickdrums4[6],
    \rel, 0.6,
    \amp, 0.3,
    \lpf, 800,
);sup


```