window.BENCHMARK_DATA = {
  "lastUpdate": 1696433562981,
  "repoUrl": "https://github.com/SecuringCarter/opentelemetry-python",
  "entries": {
    "OpenTelemetry Python Benchmarks - Python 3.10 - SDK": [
      {
        "commit": {
          "author": {
            "name": "Diego Hurtado",
            "username": "ocelotl",
            "email": "ocelotl@users.noreply.github.com"
          },
          "committer": {
            "name": "Diego Hurtado",
            "username": "ocelotl",
            "email": "ocelotl@users.noreply.github.com"
          },
          "id": "8e0db93ce40e2fc64f5fc34fe7127aea25457298",
          "message": "Fix benchmarks data path",
          "timestamp": "2023-10-04T15:14:16Z",
          "url": "https://github.com/SecuringCarter/opentelemetry-python/commit/8e0db93ce40e2fc64f5fc34fe7127aea25457298"
        },
        "date": 1696433255419,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 609624.0008416838,
            "unit": "iter/sec",
            "range": "stddev: 1.7932045780755307e-7",
            "extra": "mean: 1.6403553643218436 usec\nrounds: 28242"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 583273.2293985104,
            "unit": "iter/sec",
            "range": "stddev: 2.483356395261072e-7",
            "extra": "mean: 1.7144623644586454 usec\nrounds: 75177"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 541757.2666911058,
            "unit": "iter/sec",
            "range": "stddev: 2.7825588479185034e-7",
            "extra": "mean: 1.845845107178176 usec\nrounds: 103424"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 494709.1863975548,
            "unit": "iter/sec",
            "range": "stddev: 2.031531298470811e-7",
            "extra": "mean: 2.021389591088747 usec\nrounds: 90934"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 423918.9350224791,
            "unit": "iter/sec",
            "range": "stddev: 2.969751746140035e-7",
            "extra": "mean: 2.3589415744002404 usec\nrounds: 97952"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 619435.6158017394,
            "unit": "iter/sec",
            "range": "stddev: 2.5970475254547086e-7",
            "extra": "mean: 1.6143727846609106 usec\nrounds: 57640"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 584671.3883602361,
            "unit": "iter/sec",
            "range": "stddev: 2.6118413952998697e-7",
            "extra": "mean: 1.7103624701126399 usec\nrounds: 99091"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 542181.4324532121,
            "unit": "iter/sec",
            "range": "stddev: 2.0949303145318596e-7",
            "extra": "mean: 1.8444010439001812 usec\nrounds: 97419"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 483829.73930240417,
            "unit": "iter/sec",
            "range": "stddev: 3.2272789973990767e-7",
            "extra": "mean: 2.066842772918054 usec\nrounds: 98844"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 425359.773793083,
            "unit": "iter/sec",
            "range": "stddev: 3.5067038348786945e-7",
            "extra": "mean: 2.3509510339509716 usec\nrounds: 100060"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 605387.2627770752,
            "unit": "iter/sec",
            "range": "stddev: 1.638847469559118e-7",
            "extra": "mean: 1.6518352160445686 usec\nrounds: 294"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 592896.5969046861,
            "unit": "iter/sec",
            "range": "stddev: 3.0052266284889516e-7",
            "extra": "mean: 1.6866347441032112 usec\nrounds: 93264"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 544773.3451610652,
            "unit": "iter/sec",
            "range": "stddev: 2.2378850517782485e-7",
            "extra": "mean: 1.8356257861778178 usec\nrounds: 94288"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 495313.60258450574,
            "unit": "iter/sec",
            "range": "stddev: 2.3268364703059092e-7",
            "extra": "mean: 2.0189229505955057 usec\nrounds: 90182"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 430144.9962234223,
            "unit": "iter/sec",
            "range": "stddev: 2.8411579764234816e-7",
            "extra": "mean: 2.324797472433199 usec\nrounds: 88480"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 497124.3715299595,
            "unit": "iter/sec",
            "range": "stddev: 5.702321962926494e-7",
            "extra": "mean: 2.0115690504619215 usec\nrounds: 2989"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 511821.22267712984,
            "unit": "iter/sec",
            "range": "stddev: 2.699353496435747e-7",
            "extra": "mean: 1.9538072195783602 usec\nrounds: 159653"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 521335.1117349679,
            "unit": "iter/sec",
            "range": "stddev: 2.938799492782178e-7",
            "extra": "mean: 1.9181520244666963 usec\nrounds: 162738"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 519066.7653220078,
            "unit": "iter/sec",
            "range": "stddev: 2.4058781680884074e-7",
            "extra": "mean: 1.9265344398993467 usec\nrounds: 152445"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 517580.84745802864,
            "unit": "iter/sec",
            "range": "stddev: 2.798815319373957e-7",
            "extra": "mean: 1.9320653090454463 usec\nrounds: 164357"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 514594.6639728175,
            "unit": "iter/sec",
            "range": "stddev: 2.1822232559538485e-7",
            "extra": "mean: 1.943277048929569 usec\nrounds: 21447"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 513194.86805851286,
            "unit": "iter/sec",
            "range": "stddev: 3.0795843301769234e-7",
            "extra": "mean: 1.948577552583755 usec\nrounds: 153821"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 511514.9309580872,
            "unit": "iter/sec",
            "range": "stddev: 2.934317928976184e-7",
            "extra": "mean: 1.9549771462720773 usec\nrounds: 161284"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 513034.2441322137,
            "unit": "iter/sec",
            "range": "stddev: 3.2040152186483376e-7",
            "extra": "mean: 1.9491876252655966 usec\nrounds: 158510"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 511221.34233972087,
            "unit": "iter/sec",
            "range": "stddev: 3.007861776573064e-7",
            "extra": "mean: 1.9560998674728098 usec\nrounds: 181591"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 508766.8336455761,
            "unit": "iter/sec",
            "range": "stddev: 1.1816466463783615e-7",
            "extra": "mean: 1.9655369294308862 usec\nrounds: 28400"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 499551.09335981123,
            "unit": "iter/sec",
            "range": "stddev: 2.5242896865241146e-7",
            "extra": "mean: 2.001797240146827 usec\nrounds: 158697"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 502611.752308138,
            "unit": "iter/sec",
            "range": "stddev: 2.7011413926412584e-7",
            "extra": "mean: 1.9896072772029543 usec\nrounds: 155694"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 489118.3015899382,
            "unit": "iter/sec",
            "range": "stddev: 0.000027302213963031602",
            "extra": "mean: 2.0444951594519756 usec\nrounds: 172185"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 502730.1723780139,
            "unit": "iter/sec",
            "range": "stddev: 2.404657327447214e-7",
            "extra": "mean: 1.9891386173815684 usec\nrounds: 152575"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 498150.40909139306,
            "unit": "iter/sec",
            "range": "stddev: 3.00975165806362e-7",
            "extra": "mean: 2.007425833141362 usec\nrounds: 28259"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 505322.00087874976,
            "unit": "iter/sec",
            "range": "stddev: 2.711135057778829e-7",
            "extra": "mean: 1.978936199613336 usec\nrounds: 170071"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 501655.5589830926,
            "unit": "iter/sec",
            "range": "stddev: 2.650427426927151e-7",
            "extra": "mean: 1.9933996187087069 usec\nrounds: 169200"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 498802.0587045016,
            "unit": "iter/sec",
            "range": "stddev: 5.959345132689278e-7",
            "extra": "mean: 2.004803273260779 usec\nrounds: 168009"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 502963.7177492047,
            "unit": "iter/sec",
            "range": "stddev: 3.7304221915101815e-7",
            "extra": "mean: 1.9882149839258088 usec\nrounds: 110667"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 492089.33473304124,
            "unit": "iter/sec",
            "range": "stddev: 2.3525279935885e-7",
            "extra": "mean: 2.032151338013657 usec\nrounds: 20903"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 491495.4044776525,
            "unit": "iter/sec",
            "range": "stddev: 3.331436641689828e-7",
            "extra": "mean: 2.0346070194954757 usec\nrounds: 145711"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 487766.08989820373,
            "unit": "iter/sec",
            "range": "stddev: 2.906707039942577e-7",
            "extra": "mean: 2.0501630201654626 usec\nrounds: 151959"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 480620.6574744595,
            "unit": "iter/sec",
            "range": "stddev: 2.8333619969633035e-7",
            "extra": "mean: 2.080642986206103 usec\nrounds: 158873"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 482293.0940945124,
            "unit": "iter/sec",
            "range": "stddev: 2.3680373835389098e-7",
            "extra": "mean: 2.0734279885915914 usec\nrounds: 138218"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 54587.19275069703,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034551305193729317",
            "extra": "mean: 18.319315385333326 usec\nrounds: 86"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 41291.63544604051,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010622647964967734",
            "extra": "mean: 24.21797996610693 usec\nrounds: 14889"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Diego Hurtado",
            "username": "ocelotl",
            "email": "ocelotl@users.noreply.github.com"
          },
          "committer": {
            "name": "Diego Hurtado",
            "username": "ocelotl",
            "email": "ocelotl@users.noreply.github.com"
          },
          "id": "8e0db93ce40e2fc64f5fc34fe7127aea25457298",
          "message": "Fix benchmarks data path",
          "timestamp": "2023-10-04T15:14:16Z",
          "url": "https://github.com/SecuringCarter/opentelemetry-python/commit/8e0db93ce40e2fc64f5fc34fe7127aea25457298"
        },
        "date": 1696433355098,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 625067.4940907882,
            "unit": "iter/sec",
            "range": "stddev: 1.9890104810377043e-7",
            "extra": "mean: 1.5998272337847002 usec\nrounds: 29035"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 594455.9269676271,
            "unit": "iter/sec",
            "range": "stddev: 2.2602089940141615e-7",
            "extra": "mean: 1.6822104964132318 usec\nrounds: 85238"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 546494.1423273046,
            "unit": "iter/sec",
            "range": "stddev: 5.24119686303105e-7",
            "extra": "mean: 1.8298457797578425 usec\nrounds: 94263"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 498322.5472323096,
            "unit": "iter/sec",
            "range": "stddev: 2.6463663805921925e-7",
            "extra": "mean: 2.006732397628833 usec\nrounds: 91652"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 429831.16597817396,
            "unit": "iter/sec",
            "range": "stddev: 2.458518336216902e-7",
            "extra": "mean: 2.3264948639177505 usec\nrounds: 88505"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 619746.0139858995,
            "unit": "iter/sec",
            "range": "stddev: 1.8618917443671118e-7",
            "extra": "mean: 1.613564230237634 usec\nrounds: 56440"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 595909.6509396298,
            "unit": "iter/sec",
            "range": "stddev: 5.989679542751689e-7",
            "extra": "mean: 1.6781067371927958 usec\nrounds: 92568"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 551564.7016848666,
            "unit": "iter/sec",
            "range": "stddev: 2.535451629617569e-7",
            "extra": "mean: 1.8130239243832984 usec\nrounds: 100084"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 502852.38773717824,
            "unit": "iter/sec",
            "range": "stddev: 2.447462566956173e-7",
            "extra": "mean: 1.9886551687662697 usec\nrounds: 100439"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 432801.9855624403,
            "unit": "iter/sec",
            "range": "stddev: 2.654747381308311e-7",
            "extra": "mean: 2.310525444333319 usec\nrounds: 86214"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 605680.223226709,
            "unit": "iter/sec",
            "range": "stddev: 4.748746776153867e-7",
            "extra": "mean: 1.6510362426439922 usec\nrounds: 300"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 595433.6287091452,
            "unit": "iter/sec",
            "range": "stddev: 5.76670174862972e-7",
            "extra": "mean: 1.6794483075601958 usec\nrounds: 90330"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 555730.4782669919,
            "unit": "iter/sec",
            "range": "stddev: 2.1931395904361816e-7",
            "extra": "mean: 1.7994334288060514 usec\nrounds: 91679"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 503829.96225782594,
            "unit": "iter/sec",
            "range": "stddev: 2.616850811779356e-7",
            "extra": "mean: 1.9847966078052897 usec\nrounds: 90269"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 435204.86867369077,
            "unit": "iter/sec",
            "range": "stddev: 2.561687927946697e-7",
            "extra": "mean: 2.297768412029837 usec\nrounds: 91142"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 513044.05935510196,
            "unit": "iter/sec",
            "range": "stddev: 1.1967356368100334e-7",
            "extra": "mean: 1.9491503346847117 usec\nrounds: 2937"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 523738.8501357467,
            "unit": "iter/sec",
            "range": "stddev: 4.7218907523942596e-7",
            "extra": "mean: 1.9093485231061476 usec\nrounds: 149536"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 524847.188815661,
            "unit": "iter/sec",
            "range": "stddev: 2.5781750200254703e-7",
            "extra": "mean: 1.905316483177781 usec\nrounds: 147950"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 525427.2271132157,
            "unit": "iter/sec",
            "range": "stddev: 2.618480650461936e-7",
            "extra": "mean: 1.9032131347554369 usec\nrounds: 148154"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 525155.3457578985,
            "unit": "iter/sec",
            "range": "stddev: 4.640455781054429e-7",
            "extra": "mean: 1.9041984587566385 usec\nrounds: 144993"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 520374.4256715174,
            "unit": "iter/sec",
            "range": "stddev: 3.11373086759657e-7",
            "extra": "mean: 1.9216932090956422 usec\nrounds: 20409"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 521038.17667539493,
            "unit": "iter/sec",
            "range": "stddev: 2.465101299767142e-7",
            "extra": "mean: 1.9192451623808686 usec\nrounds: 158909"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 519872.6178639811,
            "unit": "iter/sec",
            "range": "stddev: 4.672484252159503e-7",
            "extra": "mean: 1.923548126286657 usec\nrounds: 157973"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 520343.952710579,
            "unit": "iter/sec",
            "range": "stddev: 2.9040884500380864e-7",
            "extra": "mean: 1.92180574942938 usec\nrounds: 161843"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 522356.25808872766,
            "unit": "iter/sec",
            "range": "stddev: 2.858749431897769e-7",
            "extra": "mean: 1.914402258066064 usec\nrounds: 163618"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 509358.72335776745,
            "unit": "iter/sec",
            "range": "stddev: 2.429831335345914e-7",
            "extra": "mean: 1.9632529181160447 usec\nrounds: 22806"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 511089.55530954996,
            "unit": "iter/sec",
            "range": "stddev: 4.74023477447095e-7",
            "extra": "mean: 1.9566042577300045 usec\nrounds: 144011"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 509512.75199090154,
            "unit": "iter/sec",
            "range": "stddev: 2.570222780630163e-7",
            "extra": "mean: 1.9626594154759394 usec\nrounds: 156648"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 495773.861234985,
            "unit": "iter/sec",
            "range": "stddev: 0.000026626436205848937",
            "extra": "mean: 2.017048655023835 usec\nrounds: 162973"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 512624.57744263794,
            "unit": "iter/sec",
            "range": "stddev: 2.7268830891050726e-7",
            "extra": "mean: 1.9507453290452093 usec\nrounds: 149069"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 509219.7244435217,
            "unit": "iter/sec",
            "range": "stddev: 2.250546338977722e-7",
            "extra": "mean: 1.9637888164933237 usec\nrounds: 27313"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 504617.5060936073,
            "unit": "iter/sec",
            "range": "stddev: 2.389338251413215e-7",
            "extra": "mean: 1.9816989857155265 usec\nrounds: 156797"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 507094.3790360912,
            "unit": "iter/sec",
            "range": "stddev: 3.07597478347443e-7",
            "extra": "mean: 1.9720194925071877 usec\nrounds: 160392"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 505512.82913281035,
            "unit": "iter/sec",
            "range": "stddev: 3.159770989205553e-7",
            "extra": "mean: 1.978189162311598 usec\nrounds: 154207"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 504023.36856682,
            "unit": "iter/sec",
            "range": "stddev: 4.930839255093432e-7",
            "extra": "mean: 1.984034991955788 usec\nrounds: 143597"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 495372.449522512,
            "unit": "iter/sec",
            "range": "stddev: 1.967844935100157e-7",
            "extra": "mean: 2.0186831160350094 usec\nrounds: 24297"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 497360.9574881824,
            "unit": "iter/sec",
            "range": "stddev: 2.9709896927237504e-7",
            "extra": "mean: 2.0106121820463976 usec\nrounds: 155121"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 494904.148200422,
            "unit": "iter/sec",
            "range": "stddev: 2.6159348446820385e-7",
            "extra": "mean: 2.0205932878845636 usec\nrounds: 139140"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 483165.337251773,
            "unit": "iter/sec",
            "range": "stddev: 4.995939621490312e-7",
            "extra": "mean: 2.0696848943841126 usec\nrounds: 138852"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 491318.5280987623,
            "unit": "iter/sec",
            "range": "stddev: 2.387802058196353e-7",
            "extra": "mean: 2.0353394850987283 usec\nrounds: 137176"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 53855.23753855084,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020629369946549703",
            "extra": "mean: 18.568296152889058 usec\nrounds: 89"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 40213.542069497744,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017297046524224772",
            "extra": "mean: 24.867244926392775 usec\nrounds: 18376"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.11 - SDK": [
      {
        "commit": {
          "author": {
            "name": "Diego Hurtado",
            "username": "ocelotl",
            "email": "ocelotl@users.noreply.github.com"
          },
          "committer": {
            "name": "Diego Hurtado",
            "username": "ocelotl",
            "email": "ocelotl@users.noreply.github.com"
          },
          "id": "8e0db93ce40e2fc64f5fc34fe7127aea25457298",
          "message": "Fix benchmarks data path",
          "timestamp": "2023-10-04T15:14:16Z",
          "url": "https://github.com/SecuringCarter/opentelemetry-python/commit/8e0db93ce40e2fc64f5fc34fe7127aea25457298"
        },
        "date": 1696433304848,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 932664.3339746328,
            "unit": "iter/sec",
            "range": "stddev: 1.4346329065063307e-7",
            "extra": "mean: 1.0721971062605238 usec\nrounds: 31336"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 883874.698745276,
            "unit": "iter/sec",
            "range": "stddev: 2.2363358470793068e-7",
            "extra": "mean: 1.1313820855145784 usec\nrounds: 98311"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 788578.9343465623,
            "unit": "iter/sec",
            "range": "stddev: 2.1505150815288587e-7",
            "extra": "mean: 1.268103871971456 usec\nrounds: 115104"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 684435.0017129257,
            "unit": "iter/sec",
            "range": "stddev: 1.8722751164478262e-7",
            "extra": "mean: 1.46105911810079 usec\nrounds: 88868"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 574180.3977115345,
            "unit": "iter/sec",
            "range": "stddev: 2.0118348468383603e-7",
            "extra": "mean: 1.7416129216281524 usec\nrounds: 111211"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 931651.7827384458,
            "unit": "iter/sec",
            "range": "stddev: 2.0519809160460436e-7",
            "extra": "mean: 1.073362406993582 usec\nrounds: 48906"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 889781.7854498463,
            "unit": "iter/sec",
            "range": "stddev: 2.0590506603052227e-7",
            "extra": "mean: 1.123871061818186 usec\nrounds: 136089"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 797682.9477471927,
            "unit": "iter/sec",
            "range": "stddev: 1.9749695173455467e-7",
            "extra": "mean: 1.2536309104064325 usec\nrounds: 120193"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 681295.9783017375,
            "unit": "iter/sec",
            "range": "stddev: 2.0470456633400724e-7",
            "extra": "mean: 1.4677908454599926 usec\nrounds: 128010"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 568976.874359134,
            "unit": "iter/sec",
            "range": "stddev: 3.570360660278193e-7",
            "extra": "mean: 1.7575406753154037 usec\nrounds: 123611"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 933805.7993133123,
            "unit": "iter/sec",
            "range": "stddev: 1.3162706999015695e-7",
            "extra": "mean: 1.0708864741848514 usec\nrounds: 25768"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 887267.1572987536,
            "unit": "iter/sec",
            "range": "stddev: 2.0206549463174973e-7",
            "extra": "mean: 1.1270562555752166 usec\nrounds: 122044"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 789783.780314189,
            "unit": "iter/sec",
            "range": "stddev: 1.9880861554134354e-7",
            "extra": "mean: 1.2661693300439565 usec\nrounds: 127342"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 684944.0697963781,
            "unit": "iter/sec",
            "range": "stddev: 1.9724646407778598e-7",
            "extra": "mean: 1.4599732213132124 usec\nrounds: 122024"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 576270.0799593909,
            "unit": "iter/sec",
            "range": "stddev: 2.1768467931605402e-7",
            "extra": "mean: 1.7352974495404463 usec\nrounds: 112546"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 762348.5648828848,
            "unit": "iter/sec",
            "range": "stddev: 1.123194289363073e-7",
            "extra": "mean: 1.311735925093037 usec\nrounds: 4070"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 809028.1828736801,
            "unit": "iter/sec",
            "range": "stddev: 9.990372829957356e-8",
            "extra": "mean: 1.2360508832312678 usec\nrounds: 197944"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 755614.2437156935,
            "unit": "iter/sec",
            "range": "stddev: 2.4884723030287465e-7",
            "extra": "mean: 1.3234266139327286 usec\nrounds: 152488"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 808165.780660955,
            "unit": "iter/sec",
            "range": "stddev: 1.0441149951950489e-7",
            "extra": "mean: 1.237369886141621 usec\nrounds: 196028"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 806260.6236600517,
            "unit": "iter/sec",
            "range": "stddev: 1.1036333241131811e-7",
            "extra": "mean: 1.240293734624495 usec\nrounds: 125335"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 753527.337187076,
            "unit": "iter/sec",
            "range": "stddev: 1.6557167969300585e-7",
            "extra": "mean: 1.3270918660137914 usec\nrounds: 19006"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 802727.5015628301,
            "unit": "iter/sec",
            "range": "stddev: 1.1213688780380357e-7",
            "extra": "mean: 1.2457527592527977 usec\nrounds: 192049"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 808271.256101899,
            "unit": "iter/sec",
            "range": "stddev: 8.837032829923007e-8",
            "extra": "mean: 1.237208415430692 usec\nrounds: 162923"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 805944.6445698149,
            "unit": "iter/sec",
            "range": "stddev: 1.2368154119068296e-7",
            "extra": "mean: 1.240780004852275 usec\nrounds: 196513"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 750690.9429717523,
            "unit": "iter/sec",
            "range": "stddev: 2.490178345705993e-7",
            "extra": "mean: 1.3321061208508933 usec\nrounds: 180902"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 741258.9927607818,
            "unit": "iter/sec",
            "range": "stddev: 2.2003181171272486e-7",
            "extra": "mean: 1.349056146051666 usec\nrounds: 27666"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 751729.8326483686,
            "unit": "iter/sec",
            "range": "stddev: 2.3359779610707156e-7",
            "extra": "mean: 1.330265151879057 usec\nrounds: 59613"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 787380.5337993765,
            "unit": "iter/sec",
            "range": "stddev: 1.303498799430665e-7",
            "extra": "mean: 1.2700339379418781 usec\nrounds: 187015"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 733613.3513180526,
            "unit": "iter/sec",
            "range": "stddev: 1.9815216122734323e-7",
            "extra": "mean: 1.363115867784224 usec\nrounds: 194115"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 784718.0871544383,
            "unit": "iter/sec",
            "range": "stddev: 1.0458901021865923e-7",
            "extra": "mean: 1.2743429982941028 usec\nrounds: 190735"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 743875.2158479394,
            "unit": "iter/sec",
            "range": "stddev: 2.9110788267033506e-7",
            "extra": "mean: 1.3443114902814786 usec\nrounds: 27411"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 785424.0402160705,
            "unit": "iter/sec",
            "range": "stddev: 1.0661469796312874e-7",
            "extra": "mean: 1.2731975961989903 usec\nrounds: 190111"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 738688.8260157321,
            "unit": "iter/sec",
            "range": "stddev: 1.6734796400867618e-7",
            "extra": "mean: 1.3537500024113032 usec\nrounds: 58028"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 737311.6677111847,
            "unit": "iter/sec",
            "range": "stddev: 2.1070177532701711e-7",
            "extra": "mean: 1.356278550567728 usec\nrounds: 56767"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 756590.0365760241,
            "unit": "iter/sec",
            "range": "stddev: 1.6125620840019102e-7",
            "extra": "mean: 1.3217197579359314 usec\nrounds: 60195"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 703868.325436261,
            "unit": "iter/sec",
            "range": "stddev: 4.783198482912147e-7",
            "extra": "mean: 1.4207202737531839 usec\nrounds: 25299"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 709743.6049345278,
            "unit": "iter/sec",
            "range": "stddev: 2.8103269392219187e-7",
            "extra": "mean: 1.4089595074157064 usec\nrounds: 197779"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 701667.6125518812,
            "unit": "iter/sec",
            "range": "stddev: 2.1074534059273498e-7",
            "extra": "mean: 1.42517622605256 usec\nrounds: 56964"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 701266.8061706788,
            "unit": "iter/sec",
            "range": "stddev: 2.0387463602921263e-7",
            "extra": "mean: 1.4259907801148848 usec\nrounds: 56951"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 698447.7780811883,
            "unit": "iter/sec",
            "range": "stddev: 1.819915014026395e-7",
            "extra": "mean: 1.4317462684858866 usec\nrounds: 55923"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 76524.29560107013,
            "unit": "iter/sec",
            "range": "stddev: 0.000003747136489892219",
            "extra": "mean: 13.067745245420015 usec\nrounds: 52"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 57438.62178570028,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014214236909630297",
            "extra": "mean: 17.40988848463207 usec\nrounds: 23614"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Diego Hurtado",
            "username": "ocelotl",
            "email": "ocelotl@users.noreply.github.com"
          },
          "committer": {
            "name": "Diego Hurtado",
            "username": "ocelotl",
            "email": "ocelotl@users.noreply.github.com"
          },
          "id": "8e0db93ce40e2fc64f5fc34fe7127aea25457298",
          "message": "Fix benchmarks data path",
          "timestamp": "2023-10-04T15:14:16Z",
          "url": "https://github.com/SecuringCarter/opentelemetry-python/commit/8e0db93ce40e2fc64f5fc34fe7127aea25457298"
        },
        "date": 1696433409190,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 918905.5199209227,
            "unit": "iter/sec",
            "range": "stddev: 1.4020901620581915e-7",
            "extra": "mean: 1.0882511621935365 usec\nrounds: 32366"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 860060.4765857005,
            "unit": "iter/sec",
            "range": "stddev: 2.0119080417917465e-7",
            "extra": "mean: 1.1627089341087227 usec\nrounds: 92413"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 770610.3652302414,
            "unit": "iter/sec",
            "range": "stddev: 1.9228403391343437e-7",
            "extra": "mean: 1.2976726567922845 usec\nrounds: 120863"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 672178.8487437067,
            "unit": "iter/sec",
            "range": "stddev: 2.939562789670423e-7",
            "extra": "mean: 1.4876992959076096 usec\nrounds: 42296"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 563365.2149303462,
            "unit": "iter/sec",
            "range": "stddev: 2.3744911743770917e-7",
            "extra": "mean: 1.775047470979618 usec\nrounds: 117401"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 915693.3060203079,
            "unit": "iter/sec",
            "range": "stddev: 1.8670469313766798e-7",
            "extra": "mean: 1.0920687018518211 usec\nrounds: 52454"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 871217.8999459376,
            "unit": "iter/sec",
            "range": "stddev: 2.181971046128922e-7",
            "extra": "mean: 1.147818473497909 usec\nrounds: 123732"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 779757.8938480854,
            "unit": "iter/sec",
            "range": "stddev: 1.4377502240336048e-7",
            "extra": "mean: 1.2824493447126586 usec\nrounds: 49978"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 676360.3619199687,
            "unit": "iter/sec",
            "range": "stddev: 2.8101559533302156e-7",
            "extra": "mean: 1.4785017814487573 usec\nrounds: 126012"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 558508.6700945535,
            "unit": "iter/sec",
            "range": "stddev: 2.313577771905621e-7",
            "extra": "mean: 1.7904825001744442 usec\nrounds: 129064"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 910561.1813191205,
            "unit": "iter/sec",
            "range": "stddev: 2.311968879818493e-7",
            "extra": "mean: 1.0982238431813123 usec\nrounds: 34928"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 871497.2590097018,
            "unit": "iter/sec",
            "range": "stddev: 1.7242803919346272e-7",
            "extra": "mean: 1.1474505394730883 usec\nrounds: 126487"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 778720.8463720388,
            "unit": "iter/sec",
            "range": "stddev: 1.9525154840771582e-7",
            "extra": "mean: 1.2841572235530518 usec\nrounds: 134176"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 689579.1040440432,
            "unit": "iter/sec",
            "range": "stddev: 1.9071869625612946e-7",
            "extra": "mean: 1.4501599513898995 usec\nrounds: 120673"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 569682.2998429168,
            "unit": "iter/sec",
            "range": "stddev: 2.1879736425964526e-7",
            "extra": "mean: 1.755364350052193 usec\nrounds: 127183"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 735041.876043819,
            "unit": "iter/sec",
            "range": "stddev: 3.435593368096825e-7",
            "extra": "mean: 1.3604667061722424 usec\nrounds: 3881"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 792884.1543367683,
            "unit": "iter/sec",
            "range": "stddev: 9.686577664674095e-8",
            "extra": "mean: 1.2612182934043876 usec\nrounds: 188228"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 745911.5034176615,
            "unit": "iter/sec",
            "range": "stddev: 2.1867385604508655e-7",
            "extra": "mean: 1.3406416115291704 usec\nrounds: 154919"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 794383.8871625421,
            "unit": "iter/sec",
            "range": "stddev: 1.0498562965548496e-7",
            "extra": "mean: 1.2588372148029054 usec\nrounds: 186010"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 794300.3267653957,
            "unit": "iter/sec",
            "range": "stddev: 1.1012356414709216e-7",
            "extra": "mean: 1.2589696444822938 usec\nrounds: 173577"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 738438.0229705,
            "unit": "iter/sec",
            "range": "stddev: 2.0444810051356806e-7",
            "extra": "mean: 1.3542097899798278 usec\nrounds: 18308"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 790561.9586908162,
            "unit": "iter/sec",
            "range": "stddev: 1.0114196700177843e-7",
            "extra": "mean: 1.2649229943419193 usec\nrounds: 187129"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 783599.0057111023,
            "unit": "iter/sec",
            "range": "stddev: 1.0790621580188362e-7",
            "extra": "mean: 1.2761629260778828 usec\nrounds: 189256"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 743595.2771307051,
            "unit": "iter/sec",
            "range": "stddev: 2.063325165860811e-7",
            "extra": "mean: 1.344817578533686 usec\nrounds: 199729"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 789964.508001479,
            "unit": "iter/sec",
            "range": "stddev: 1.093797870762009e-7",
            "extra": "mean: 1.2658796564542971 usec\nrounds: 187341"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 729573.8552317924,
            "unit": "iter/sec",
            "range": "stddev: 2.2837714022605386e-7",
            "extra": "mean: 1.3706631519605246 usec\nrounds: 28741"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 772743.2079384928,
            "unit": "iter/sec",
            "range": "stddev: 1.1826820203296668e-7",
            "extra": "mean: 1.2940909602658013 usec\nrounds: 180856"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 771429.6120168013,
            "unit": "iter/sec",
            "range": "stddev: 1.0803321930539644e-7",
            "extra": "mean: 1.2962945477107517 usec\nrounds: 183797"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 725692.3703272226,
            "unit": "iter/sec",
            "range": "stddev: 2.1161099432417211e-7",
            "extra": "mean: 1.377994369086572 usec\nrounds: 198639"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 773765.3226980509,
            "unit": "iter/sec",
            "range": "stddev: 1.0104668195372426e-7",
            "extra": "mean: 1.2923815149961604 usec\nrounds: 177244"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 722399.659347924,
            "unit": "iter/sec",
            "range": "stddev: 1.1504875272678883e-7",
            "extra": "mean: 1.3842752928519548 usec\nrounds: 25480"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 772623.0369568723,
            "unit": "iter/sec",
            "range": "stddev: 1.1168270494337803e-7",
            "extra": "mean: 1.2942922384746598 usec\nrounds: 176675"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 770811.0880661532,
            "unit": "iter/sec",
            "range": "stddev: 1.0397077766719522e-7",
            "extra": "mean: 1.297334736723685 usec\nrounds: 182687"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 775124.0399784803,
            "unit": "iter/sec",
            "range": "stddev: 1.079016847742286e-7",
            "extra": "mean: 1.290116095519064 usec\nrounds: 182424"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 771777.5038452558,
            "unit": "iter/sec",
            "range": "stddev: 1.0195352591253576e-7",
            "extra": "mean: 1.2957102209090867 usec\nrounds: 181944"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 697196.0525910023,
            "unit": "iter/sec",
            "range": "stddev: 1.4756294600845868e-7",
            "extra": "mean: 1.4343167840432858 usec\nrounds: 25291"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 697108.2237450918,
            "unit": "iter/sec",
            "range": "stddev: 2.8106887727143707e-7",
            "extra": "mean: 1.4344974939869093 usec\nrounds: 185624"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 689113.2780473696,
            "unit": "iter/sec",
            "range": "stddev: 2.8402604211742516e-7",
            "extra": "mean: 1.4511402288366009 usec\nrounds: 182610"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 685806.7354378375,
            "unit": "iter/sec",
            "range": "stddev: 2.758216371921293e-7",
            "extra": "mean: 1.4581367436725057 usec\nrounds: 181852"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 682579.4095531374,
            "unit": "iter/sec",
            "range": "stddev: 2.5388563403636413e-7",
            "extra": "mean: 1.4650310073880892 usec\nrounds: 186641"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 67365.41014386715,
            "unit": "iter/sec",
            "range": "stddev: 0.000004827511862094805",
            "extra": "mean: 14.8444134439971 usec\nrounds: 37"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 56914.70633143579,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011583072098319354",
            "extra": "mean: 17.570151274727188 usec\nrounds: 20772"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.7 - SDK": [
      {
        "commit": {
          "author": {
            "name": "Diego Hurtado",
            "username": "ocelotl",
            "email": "ocelotl@users.noreply.github.com"
          },
          "committer": {
            "name": "Diego Hurtado",
            "username": "ocelotl",
            "email": "ocelotl@users.noreply.github.com"
          },
          "id": "8e0db93ce40e2fc64f5fc34fe7127aea25457298",
          "message": "Fix benchmarks data path",
          "timestamp": "2023-10-04T15:14:16Z",
          "url": "https://github.com/SecuringCarter/opentelemetry-python/commit/8e0db93ce40e2fc64f5fc34fe7127aea25457298"
        },
        "date": 1696433460464,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 481612.1690237196,
            "unit": "iter/sec",
            "range": "stddev: 4.159014235931493e-7",
            "extra": "mean: 2.076359494875532 usec\nrounds: 20698"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 447289.34354435623,
            "unit": "iter/sec",
            "range": "stddev: 2.827108277470969e-7",
            "extra": "mean: 2.235689301417111 usec\nrounds: 57232"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 429613.03768667317,
            "unit": "iter/sec",
            "range": "stddev: 4.7085778038287966e-7",
            "extra": "mean: 2.3276760998331794 usec\nrounds: 75747"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 400666.68482004013,
            "unit": "iter/sec",
            "range": "stddev: 2.990431127230986e-7",
            "extra": "mean: 2.4958401531416348 usec\nrounds: 74218"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 369205.57385813957,
            "unit": "iter/sec",
            "range": "stddev: 3.054039148642342e-7",
            "extra": "mean: 2.708518155753065 usec\nrounds: 73861"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 480269.951226634,
            "unit": "iter/sec",
            "range": "stddev: 2.222414555740035e-7",
            "extra": "mean: 2.0821623285944684 usec\nrounds: 45137"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 454552.27720982925,
            "unit": "iter/sec",
            "range": "stddev: 3.0344611072087645e-7",
            "extra": "mean: 2.19996697880007 usec\nrounds: 74925"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 421978.08844027657,
            "unit": "iter/sec",
            "range": "stddev: 3.524066563823324e-7",
            "extra": "mean: 2.369791293420516 usec\nrounds: 63792"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 401390.7076076702,
            "unit": "iter/sec",
            "range": "stddev: 2.24912274342936e-7",
            "extra": "mean: 2.491338192555833 usec\nrounds: 78006"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 372333.29171904386,
            "unit": "iter/sec",
            "range": "stddev: 2.9852291667133935e-7",
            "extra": "mean: 2.685765743329185 usec\nrounds: 80208"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 464135.3977598897,
            "unit": "iter/sec",
            "range": "stddev: 0.000014984903959346219",
            "extra": "mean: 2.1545437060530515 usec\nrounds: 31365"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 456964.3145145111,
            "unit": "iter/sec",
            "range": "stddev: 2.241442514904959e-7",
            "extra": "mean: 2.1883546881826472 usec\nrounds: 53741"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 437751.94104111823,
            "unit": "iter/sec",
            "range": "stddev: 2.113803164931575e-7",
            "extra": "mean: 2.284398779869875 usec\nrounds: 65937"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 399460.1606265879,
            "unit": "iter/sec",
            "range": "stddev: 3.9790566038064435e-7",
            "extra": "mean: 2.50337855577741 usec\nrounds: 69209"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 375113.6795932151,
            "unit": "iter/sec",
            "range": "stddev: 3.2112995032794405e-7",
            "extra": "mean: 2.6658585234332985 usec\nrounds: 72883"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 381324.4960673846,
            "unit": "iter/sec",
            "range": "stddev: 3.877287973391723e-7",
            "extra": "mean: 2.622438396465587 usec\nrounds: 2988"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 379894.1978865604,
            "unit": "iter/sec",
            "range": "stddev: 2.693001722028842e-7",
            "extra": "mean: 2.6323118530454845 usec\nrounds: 131845"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 380626.86558142764,
            "unit": "iter/sec",
            "range": "stddev: 2.9342659166735145e-7",
            "extra": "mean: 2.6272449225896004 usec\nrounds: 149495"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 381006.3928471517,
            "unit": "iter/sec",
            "range": "stddev: 3.1912386591712276e-7",
            "extra": "mean: 2.6246278770476428 usec\nrounds: 120267"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 373856.5846822164,
            "unit": "iter/sec",
            "range": "stddev: 3.3604715173422545e-7",
            "extra": "mean: 2.674822488013725 usec\nrounds: 127964"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 379542.86373160366,
            "unit": "iter/sec",
            "range": "stddev: 2.7311988729644254e-7",
            "extra": "mean: 2.6347485239695008 usec\nrounds: 18848"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 379988.391763661,
            "unit": "iter/sec",
            "range": "stddev: 2.795953822028044e-7",
            "extra": "mean: 2.631659339272563 usec\nrounds: 148420"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 379338.6119458505,
            "unit": "iter/sec",
            "range": "stddev: 3.1593338984553747e-7",
            "extra": "mean: 2.6361671828512603 usec\nrounds: 146968"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 379208.02829401445,
            "unit": "iter/sec",
            "range": "stddev: 3.120102326890238e-7",
            "extra": "mean: 2.6370749704293233 usec\nrounds: 144088"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 378630.1249620655,
            "unit": "iter/sec",
            "range": "stddev: 2.734096586599083e-7",
            "extra": "mean: 2.6410999391561587 usec\nrounds: 147950"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 377123.1637205861,
            "unit": "iter/sec",
            "range": "stddev: 3.066120470895147e-7",
            "extra": "mean: 2.65165361399256 usec\nrounds: 21958"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 372362.2408254389,
            "unit": "iter/sec",
            "range": "stddev: 3.337619365797017e-7",
            "extra": "mean: 2.6855569398853034 usec\nrounds: 146777"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 373143.80080655514,
            "unit": "iter/sec",
            "range": "stddev: 2.918492126344085e-7",
            "extra": "mean: 2.6799319668140997 usec\nrounds: 136496"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 371188.55510404316,
            "unit": "iter/sec",
            "range": "stddev: 4.004183655102775e-7",
            "extra": "mean: 2.6940485805649437 usec\nrounds: 146247"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 373366.86620430177,
            "unit": "iter/sec",
            "range": "stddev: 3.1474200240766084e-7",
            "extra": "mean: 2.678330860384414 usec\nrounds: 130041"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 335644.5619478919,
            "unit": "iter/sec",
            "range": "stddev: 4.880938180960853e-7",
            "extra": "mean: 2.979342177321639 usec\nrounds: 79"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 372645.05243972345,
            "unit": "iter/sec",
            "range": "stddev: 3.046902040833192e-7",
            "extra": "mean: 2.683518789402828 usec\nrounds: 136202"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 371862.6735864435,
            "unit": "iter/sec",
            "range": "stddev: 3.1140922684921216e-7",
            "extra": "mean: 2.6891647670777568 usec\nrounds: 148062"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 374239.8679123328,
            "unit": "iter/sec",
            "range": "stddev: 3.2546697007298336e-7",
            "extra": "mean: 2.672083029470965 usec\nrounds: 145602"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 372275.39093444997,
            "unit": "iter/sec",
            "range": "stddev: 3.3898994808111e-7",
            "extra": "mean: 2.686183466196613 usec\nrounds: 125894"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 363225.43516955315,
            "unit": "iter/sec",
            "range": "stddev: 3.88963526763686e-7",
            "extra": "mean: 2.753111162309438 usec\nrounds: 19215"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 366348.0991598069,
            "unit": "iter/sec",
            "range": "stddev: 3.475182147362587e-7",
            "extra": "mean: 2.7296442981236377 usec\nrounds: 131321"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 357645.65920690534,
            "unit": "iter/sec",
            "range": "stddev: 4.740595601119059e-7",
            "extra": "mean: 2.7960635736990156 usec\nrounds: 140672"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 363434.7518307906,
            "unit": "iter/sec",
            "range": "stddev: 3.0668053999135014e-7",
            "extra": "mean: 2.7515255350858245 usec\nrounds: 129758"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 365237.7402071039,
            "unit": "iter/sec",
            "range": "stddev: 3.1516453910287514e-7",
            "extra": "mean: 2.7379426875025605 usec\nrounds: 126457"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 45177.768956175685,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031949250763537087",
            "extra": "mean: 22.13478051494844 usec\nrounds: 101"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 34866.752615603546,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010326833699962092",
            "extra": "mean: 28.680617636655974 usec\nrounds: 15306"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Diego Hurtado",
            "username": "ocelotl",
            "email": "ocelotl@users.noreply.github.com"
          },
          "committer": {
            "name": "Diego Hurtado",
            "username": "ocelotl",
            "email": "ocelotl@users.noreply.github.com"
          },
          "id": "8e0db93ce40e2fc64f5fc34fe7127aea25457298",
          "message": "Fix benchmarks data path",
          "timestamp": "2023-10-04T15:14:16Z",
          "url": "https://github.com/SecuringCarter/opentelemetry-python/commit/8e0db93ce40e2fc64f5fc34fe7127aea25457298"
        },
        "date": 1696433511314,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 480317.181021839,
            "unit": "iter/sec",
            "range": "stddev: 1.4882165712599888e-7",
            "extra": "mean: 2.0819575886762465 usec\nrounds: 27023"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 458049.6921125878,
            "unit": "iter/sec",
            "range": "stddev: 2.442332022602899e-7",
            "extra": "mean: 2.183169243904222 usec\nrounds: 71400"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 436638.48732403544,
            "unit": "iter/sec",
            "range": "stddev: 2.875900669572751e-7",
            "extra": "mean: 2.290224130558345 usec\nrounds: 79531"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 402180.4414182809,
            "unit": "iter/sec",
            "range": "stddev: 2.628789964878153e-7",
            "extra": "mean: 2.4864461247133773 usec\nrounds: 77763"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 367307.3641035526,
            "unit": "iter/sec",
            "range": "stddev: 2.5176332094031526e-7",
            "extra": "mean: 2.7225155216819354 usec\nrounds: 69974"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 485367.0959256387,
            "unit": "iter/sec",
            "range": "stddev: 2.139110160156145e-7",
            "extra": "mean: 2.0602962343232396 usec\nrounds: 47468"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 462975.312682752,
            "unit": "iter/sec",
            "range": "stddev: 2.3883060763863056e-7",
            "extra": "mean: 2.159942382684317 usec\nrounds: 83214"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 425956.60000626335,
            "unit": "iter/sec",
            "range": "stddev: 3.6957481887632197e-7",
            "extra": "mean: 2.3476570147881164 usec\nrounds: 78519"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 404684.436446632,
            "unit": "iter/sec",
            "range": "stddev: 2.8498113231722583e-7",
            "extra": "mean: 2.471061177396862 usec\nrounds: 78602"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 370082.8937950533,
            "unit": "iter/sec",
            "range": "stddev: 2.4849987692144776e-7",
            "extra": "mean: 2.702097332155498 usec\nrounds: 76636"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 470758.3814773897,
            "unit": "iter/sec",
            "range": "stddev: 0.00001627142928159696",
            "extra": "mean: 2.1242319613337135 usec\nrounds: 31383"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 463642.2193574866,
            "unit": "iter/sec",
            "range": "stddev: 2.3349938475820795e-7",
            "extra": "mean: 2.1568355042942287 usec\nrounds: 52419"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 439987.6944111632,
            "unit": "iter/sec",
            "range": "stddev: 3.232557612448702e-7",
            "extra": "mean: 2.2727908364307843 usec\nrounds: 68894"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 399942.6693149416,
            "unit": "iter/sec",
            "range": "stddev: 3.886363905292593e-7",
            "extra": "mean: 2.5003583681453434 usec\nrounds: 70807"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 374903.77106275875,
            "unit": "iter/sec",
            "range": "stddev: 2.577019799897778e-7",
            "extra": "mean: 2.667351136973761 usec\nrounds: 70597"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 383101.47029879154,
            "unit": "iter/sec",
            "range": "stddev: 1.058477747896776e-7",
            "extra": "mean: 2.610274503045034 usec\nrounds: 2980"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 379164.87871053384,
            "unit": "iter/sec",
            "range": "stddev: 3.382653937593754e-7",
            "extra": "mean: 2.6373750738750013 usec\nrounds: 117260"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 379233.4658823655,
            "unit": "iter/sec",
            "range": "stddev: 3.3014071571541686e-7",
            "extra": "mean: 2.6368980851236117 usec\nrounds: 138682"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 379591.21845352434,
            "unit": "iter/sec",
            "range": "stddev: 2.9684234938323513e-7",
            "extra": "mean: 2.63441289309604 usec\nrounds: 143281"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 380617.11369553383,
            "unit": "iter/sec",
            "range": "stddev: 4.602605056254756e-7",
            "extra": "mean: 2.627312235886292 usec\nrounds: 145160"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 379763.21142688947,
            "unit": "iter/sec",
            "range": "stddev: 3.225873839117784e-7",
            "extra": "mean: 2.633219779879906 usec\nrounds: 18430"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 380985.4523015751,
            "unit": "iter/sec",
            "range": "stddev: 2.796929829112431e-7",
            "extra": "mean: 2.6247721375157234 usec\nrounds: 127244"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 381045.46511967893,
            "unit": "iter/sec",
            "range": "stddev: 3.8109223349320413e-7",
            "extra": "mean: 2.624358748596889 usec\nrounds: 121892"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 373119.52679768903,
            "unit": "iter/sec",
            "range": "stddev: 2.798162788862515e-7",
            "extra": "mean: 2.680106314945599 usec\nrounds: 144807"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 377766.8375514811,
            "unit": "iter/sec",
            "range": "stddev: 4.612901900917235e-7",
            "extra": "mean: 2.647135483044412 usec\nrounds: 131805"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 373716.42636316776,
            "unit": "iter/sec",
            "range": "stddev: 3.014319540868157e-7",
            "extra": "mean: 2.675825651367613 usec\nrounds: 22537"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 359786.17433063727,
            "unit": "iter/sec",
            "range": "stddev: 7.228094981361198e-7",
            "extra": "mean: 2.7794286477529213 usec\nrounds: 145130"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 374260.43964128493,
            "unit": "iter/sec",
            "range": "stddev: 3.6800336220921537e-7",
            "extra": "mean: 2.671936154829679 usec\nrounds: 123604"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 372599.7289616273,
            "unit": "iter/sec",
            "range": "stddev: 3.201529334213489e-7",
            "extra": "mean: 2.683845215848202 usec\nrounds: 141927"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 372869.9842216308,
            "unit": "iter/sec",
            "range": "stddev: 3.919226416405483e-7",
            "extra": "mean: 2.6818999713466036 usec\nrounds: 133302"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 339203.3187625778,
            "unit": "iter/sec",
            "range": "stddev: 4.7346115935108867e-7",
            "extra": "mean: 2.948084363230952 usec\nrounds: 81"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 374768.6253464679,
            "unit": "iter/sec",
            "range": "stddev: 3.1495456671432373e-7",
            "extra": "mean: 2.6683130133305992 usec\nrounds: 49160"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 374841.56463757943,
            "unit": "iter/sec",
            "range": "stddev: 2.8542966542961234e-7",
            "extra": "mean: 2.6677937943377845 usec\nrounds: 120713"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 375153.72605540935,
            "unit": "iter/sec",
            "range": "stddev: 5.16327464179032e-7",
            "extra": "mean: 2.665573951549404 usec\nrounds: 101460"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 376063.2172479917,
            "unit": "iter/sec",
            "range": "stddev: 3.219601137868495e-7",
            "extra": "mean: 2.65912738639514 usec\nrounds: 139158"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 366187.4779456178,
            "unit": "iter/sec",
            "range": "stddev: 2.559993919155745e-7",
            "extra": "mean: 2.730841604989314 usec\nrounds: 19532"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 362590.6780969356,
            "unit": "iter/sec",
            "range": "stddev: 4.815339109074695e-7",
            "extra": "mean: 2.757930802988427 usec\nrounds: 136687"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 359152.39873362216,
            "unit": "iter/sec",
            "range": "stddev: 4.816261550581603e-7",
            "extra": "mean: 2.784333345749654 usec\nrounds: 118580"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 361210.52080262,
            "unit": "iter/sec",
            "range": "stddev: 3.098192036502417e-7",
            "extra": "mean: 2.7684686419929627 usec\nrounds: 111919"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 358643.9020906096,
            "unit": "iter/sec",
            "range": "stddev: 4.6861406185986245e-7",
            "extra": "mean: 2.788281061439475 usec\nrounds: 115893"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 46330.52333794571,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023477590920251065",
            "extra": "mean: 21.584042828650244 usec\nrounds: 124"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 34215.55512680711,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011309920544450923",
            "extra": "mean: 29.226473055716195 usec\nrounds: 13092"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.8 - SDK": [
      {
        "commit": {
          "author": {
            "name": "Diego Hurtado",
            "username": "ocelotl",
            "email": "ocelotl@users.noreply.github.com"
          },
          "committer": {
            "name": "Diego Hurtado",
            "username": "ocelotl",
            "email": "ocelotl@users.noreply.github.com"
          },
          "id": "8e0db93ce40e2fc64f5fc34fe7127aea25457298",
          "message": "Fix benchmarks data path",
          "timestamp": "2023-10-04T15:14:16Z",
          "url": "https://github.com/SecuringCarter/opentelemetry-python/commit/8e0db93ce40e2fc64f5fc34fe7127aea25457298"
        },
        "date": 1696433561926,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 582625.7045037241,
            "unit": "iter/sec",
            "range": "stddev: 2.4541215806534316e-7",
            "extra": "mean: 1.7163678022956297 usec\nrounds: 28032"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 559223.8014094206,
            "unit": "iter/sec",
            "range": "stddev: 2.402313768385381e-7",
            "extra": "mean: 1.7881928442238766 usec\nrounds: 79631"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 526015.4413781929,
            "unit": "iter/sec",
            "range": "stddev: 2.513727923439319e-7",
            "extra": "mean: 1.9010848757214018 usec\nrounds: 85377"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 470544.4847775495,
            "unit": "iter/sec",
            "range": "stddev: 3.637235144909582e-7",
            "extra": "mean: 2.125197579295295 usec\nrounds: 80110"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 428042.6876963615,
            "unit": "iter/sec",
            "range": "stddev: 3.1575450619687687e-7",
            "extra": "mean: 2.336215589575414 usec\nrounds: 78433"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 593601.3088277611,
            "unit": "iter/sec",
            "range": "stddev: 2.1013700840220327e-7",
            "extra": "mean: 1.684632404154889 usec\nrounds: 51478"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 555340.2188242676,
            "unit": "iter/sec",
            "range": "stddev: 2.591967229940405e-7",
            "extra": "mean: 1.8006979615435363 usec\nrounds: 86221"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 525519.1342508197,
            "unit": "iter/sec",
            "range": "stddev: 2.631271800759053e-7",
            "extra": "mean: 1.9028802850834354 usec\nrounds: 87703"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 481920.4713683962,
            "unit": "iter/sec",
            "range": "stddev: 2.1407634411853116e-7",
            "extra": "mean: 2.075031170932696 usec\nrounds: 79197"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 439766.13933825435,
            "unit": "iter/sec",
            "range": "stddev: 2.7144059479957855e-7",
            "extra": "mean: 2.2739358730637313 usec\nrounds: 77304"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 602652.7521060209,
            "unit": "iter/sec",
            "range": "stddev: 2.3809564020005445e-7",
            "extra": "mean: 1.6593303465476852 usec\nrounds: 34297"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 570596.1711450609,
            "unit": "iter/sec",
            "range": "stddev: 2.1367190017650816e-7",
            "extra": "mean: 1.7525529447441262 usec\nrounds: 56580"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 540266.5776045413,
            "unit": "iter/sec",
            "range": "stddev: 2.3886740272989943e-7",
            "extra": "mean: 1.8509381136139234 usec\nrounds: 81881"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 478179.3711041514,
            "unit": "iter/sec",
            "range": "stddev: 3.702016937542643e-7",
            "extra": "mean: 2.0912654548248835 usec\nrounds: 86880"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 443495.499290584,
            "unit": "iter/sec",
            "range": "stddev: 2.1591410913046995e-7",
            "extra": "mean: 2.2548143140113064 usec\nrounds: 76554"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 482951.08712422324,
            "unit": "iter/sec",
            "range": "stddev: 1.0790036777433554e-7",
            "extra": "mean: 2.070603062423137 usec\nrounds: 3091"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 489013.3999771224,
            "unit": "iter/sec",
            "range": "stddev: 2.424906368139697e-7",
            "extra": "mean: 2.0449337381077557 usec\nrounds: 144379"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 485811.202195498,
            "unit": "iter/sec",
            "range": "stddev: 2.542138516470928e-7",
            "extra": "mean: 2.0584128062110523 usec\nrounds: 158451"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 485722.9127257179,
            "unit": "iter/sec",
            "range": "stddev: 2.8019009399604144e-7",
            "extra": "mean: 2.0587869622792296 usec\nrounds: 154796"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 489527.7061155579,
            "unit": "iter/sec",
            "range": "stddev: 2.504164887721849e-7",
            "extra": "mean: 2.0427852959234545 usec\nrounds: 154875"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 491026.1386312923,
            "unit": "iter/sec",
            "range": "stddev: 2.246312471616577e-7",
            "extra": "mean: 2.036551460961821 usec\nrounds: 19173"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 486038.2047580326,
            "unit": "iter/sec",
            "range": "stddev: 2.7047331479602565e-7",
            "extra": "mean: 2.0574514312055703 usec\nrounds: 158381"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 489992.8524385446,
            "unit": "iter/sec",
            "range": "stddev: 2.7383855263467206e-7",
            "extra": "mean: 2.0408460960671277 usec\nrounds: 163022"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 489921.571812173,
            "unit": "iter/sec",
            "range": "stddev: 2.2895440706610927e-7",
            "extra": "mean: 2.0411430268340616 usec\nrounds: 161526"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 482825.4600799817,
            "unit": "iter/sec",
            "range": "stddev: 3.2970599124295337e-7",
            "extra": "mean: 2.0711418155835166 usec\nrounds: 166756"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 480460.69998227496,
            "unit": "iter/sec",
            "range": "stddev: 2.9847813531251235e-7",
            "extra": "mean: 2.081335684764418 usec\nrounds: 26714"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 477429.0435154133,
            "unit": "iter/sec",
            "range": "stddev: 2.3401354098565936e-7",
            "extra": "mean: 2.094552088069012 usec\nrounds: 139984"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 476669.11594350415,
            "unit": "iter/sec",
            "range": "stddev: 2.5084289239810485e-7",
            "extra": "mean: 2.0978913182168952 usec\nrounds: 145840"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 484037.4672063622,
            "unit": "iter/sec",
            "range": "stddev: 3.3337189850316545e-7",
            "extra": "mean: 2.0659557735716865 usec\nrounds: 161891"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 482238.9122572275,
            "unit": "iter/sec",
            "range": "stddev: 2.6647202003978884e-7",
            "extra": "mean: 2.07366094809578 usec\nrounds: 163743"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 481100.8056039469,
            "unit": "iter/sec",
            "range": "stddev: 1.618546633749848e-7",
            "extra": "mean: 2.0785664633104415 usec\nrounds: 28540"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 480002.51484713354,
            "unit": "iter/sec",
            "range": "stddev: 2.597517336133239e-7",
            "extra": "mean: 2.083322418255392 usec\nrounds: 122896"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 482118.4054829961,
            "unit": "iter/sec",
            "range": "stddev: 2.620667729325601e-7",
            "extra": "mean: 2.0741792651499784 usec\nrounds: 158674"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 478316.4211768036,
            "unit": "iter/sec",
            "range": "stddev: 2.983793955727133e-7",
            "extra": "mean: 2.0906662529789304 usec\nrounds: 158510"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 481259.9177005219,
            "unit": "iter/sec",
            "range": "stddev: 3.399745848662089e-7",
            "extra": "mean: 2.0778792565523383 usec\nrounds: 155177"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 467379.6403517042,
            "unit": "iter/sec",
            "range": "stddev: 2.3935040237536245e-7",
            "extra": "mean: 2.1395882782730924 usec\nrounds: 24101"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 465163.9835833129,
            "unit": "iter/sec",
            "range": "stddev: 2.4066568315683234e-7",
            "extra": "mean: 2.1497795085007816 usec\nrounds: 145533"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 465065.5138214223,
            "unit": "iter/sec",
            "range": "stddev: 2.696614303036123e-7",
            "extra": "mean: 2.150234687975561 usec\nrounds: 144807"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 461761.1210686127,
            "unit": "iter/sec",
            "range": "stddev: 2.8411774086387777e-7",
            "extra": "mean: 2.165621907894257 usec\nrounds: 142086"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 461425.574955899,
            "unit": "iter/sec",
            "range": "stddev: 2.8522115288552965e-7",
            "extra": "mean: 2.1671967361054394 usec\nrounds: 126427"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 56214.48875892537,
            "unit": "iter/sec",
            "range": "stddev: 0.000002362034308216632",
            "extra": "mean: 17.789008173470695 usec\nrounds: 96"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 41614.14436081473,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010083439893799107",
            "extra": "mean: 24.0302910310859 usec\nrounds: 17393"
          }
        ]
      }
    ]
  }
}