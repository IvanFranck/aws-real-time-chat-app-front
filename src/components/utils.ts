export const getNameInitials = (name: string) => {
    return name.split(" ").map((n) => n[0]).join("").toUpperCase()
}