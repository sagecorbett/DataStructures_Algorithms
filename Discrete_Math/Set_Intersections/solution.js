function inter(s1, s2) {
    let intersection = new Set();

    // an intersection is when both sets share an element
    for (i of s2) {
        if (s1.has(i)) {
            intersection.add(i)
        }
    }
    return intersection;
}

