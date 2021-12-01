# Guide to the csv files created for the presentation

I call the stock closing price on Jan 1, 2020 as the "Reference zero". This is the _start date_

Column guide that could be useful:
- Adj Close = Adjusted close stock price for the day. There is only a small variation in some stocks. 
- ref_Close = Cumulative stock price adjusted to the closing price on Jan 1, 2020.
- Perc_ref = Cumulative % change of the stock price compared to the Adjusted closing price on Jan 01, 2020.
- Perc_Change = daily percent change of the stock price.

## All twelve stocks analysis

The csv file is: *stocks_12.csv* ; the dataframe is "combined_all" in the file *preprocess_all_stocks_v2.ipynb*. The useful plots from this file are:

<img src = "images/combined_all_cols.png">

**Fig 1** The data frame with all the files

<img src = "images/Perc_change_close_12stocks_Jan2020.png">

**Fig 2** Cumulative % change of stock closing price change from Jan 1, 2020. This file contains all 12 stocks. Here, y='Perc_ref'. This figure **includes NASDAQ**. Use the file, **stocks_12.csv** to make this image.

<img src = "images/Perc_change_close_11stocks_Jan2020.png">

**Fig 3** Cumulative % change of stock closing price change from Jan 1, 2020. This file contains all 12 stocks. Here, y='Perc_ref'. This figure **DOESE NOT include NASDAQ**. Use the file, **stocks_11_Jan2020.csv** to make this image.

<img src = "images/Change_11stocks_Jan2020.png">

**Fig 4** Cumulative change in the stock price adjusted to Jan 20, 2020. **This does not include NASDAQ**. Use the file, **stocks_11_Jan2020.csv** to make this image.

