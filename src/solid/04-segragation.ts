
interface Bird {
  eat(): void;
}

interface FlyingfBird {
  fly(): void;
}

interface SwimmerBird {
  swim(): void;
}

interface RunningBird {
  run(): void;
}

class Tucan implements Bird, FlyingfBird {

  public fly() {}
  public eat() {}
}

class Hummingbird implements Bird, FlyingfBird {

  public fly() {}
  public eat() {}
}

class Ostrich implements Bird, RunningBird {

  public eat() {}
  public run() {}

}

class Penguin implements Bird, SwimmerBird, RunningBird {

  public eat() {}
  public run() {}
  public swim() {}

}