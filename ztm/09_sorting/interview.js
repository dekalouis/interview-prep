// #1 - Sort 10 schools around your house by distance:
// Insertion sort because it is a small input (constant)

// #2 - eBay sorts listings by the current Bid amount:
// radix or counting sort (because a bid is a number) fixed length of integers to get that O(nlogn) time

// #3 - Sport scores on ESPN:
// Quick sort, most efficient (memory efficient better space complexity)

// #4 - Massive database (can't fit all into memory) needs to sort through past year's user data: mergeSort, because we're not sorting in memory because data is so big, so better worry with the performance

// #5 - Almost sorted Udemy review data needs to update and add 2 new reviews:
// InsertionSort (data is almost sorted)

// #6 - Temperature Records for the past 50 years in Canada:
// tricky, maybe use radix or countingsort if no decimals, if they do, then use QuickSort, so in memory sort

// #7 - Large user name database needs to be sorted. Data is very random:
// MergeSort if we have enough memory, or QuickSort, to not worry about memory and I can pick a good pivot

// #8 - You want to teach sorting for the first time:
// BubbleSort because it is the simplest onw

[1, 4, 6, 2, 3, 0].sort();
