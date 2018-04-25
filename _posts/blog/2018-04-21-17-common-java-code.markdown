---
layout: post
title:  "Common Java Code for Coding Practice Problems"
date:   2018-04-21 10:06:21 -0800
categories: programming
---

Java is extremely verbose, and sometimes I find myself repeating the same code while doing Leetcode practice problems. I'm compiling a list so I won't have to always look these up on StackOverflow.

### Sorting HashMap by Value (Java 8)

```java
Map<String, Integer> result = hm.entrySet().stream()
    .sorted(Map.Entry.comparingByValue(Comparator.reverseOrder()))
    .collect(Collectors.toMap(Map.Entry::getKey, Map.Entry::getValue,
            (oldValue, newValue) -> oldValue, LinkedHashMap::new));
```


### Iterating Through HashMap

```java
Iterator it = (Iterator) hm.entrySet().iterator();

while(it.hasNext()) {
    Map.Entry entry = (Map.Entry) it.next();
    entry.getValue();
    entry.getKey();
}
```

Easier way:
```java
for (String key: hm.keySet()) {
    key;
    hm.get(key);
}
```

### Using STDIN (HackerRank interviews)
```java
Scanner scan = new Scanner(System.in);
int n = scan.nextInt();   // read the next integer input
String input = scan.next(); // read the next string input
```