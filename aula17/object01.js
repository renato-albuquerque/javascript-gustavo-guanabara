let friend = {
    name: "José",
    sex: "M",
    weight: 85.4,
    fatten(p=0) {
        console.log("Fed up.")
        this.weight += p
    }
}

friend.fatten(2)
console.log(`${friend.name} weighs ${friend.weight} kg`);