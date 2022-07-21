import { useCallback, useEffect, useState } from 'react';
import { Button, Grid, Space } from '@arco-design/web-react';
import { IconRefresh, IconThumbDown, IconThumbUp } from '@arco-design/web-react/icon';
import request from '/src/lib/request';

import redIcon from './red.svg';
import greenIcon from './green.svg';
// @ts-ignore
import dayjs from 'dayjs';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import api_keys from '/src/api/api_keys';
import { getRiskAnalysisInfo } from '/src/api/shared/api_shared';

interface Props {
  field: any;
}

const devData = {
  prediction: true,
  score: 85,
  interpretation: [
    {
      field: 'financial liability1',
      message: 'adfadsf dafdsaf adfasd sd',
      sentiment: 0,
    },
    {
      field: 'financial liability2',
      message: 'adfadsf dafdsaf adfasd sd',
      sentiment: 0,
    },
    {
      field: 'financial liability3',
      message: 'adfadsf dafdsaf adfasd sd',
      sentiment: 1,
    },
    {
      field: 'financial liability4',
      message: 'adfadsf dafdsaf adfasd sd',
      sentiment: 0,
    },
    {
      field: 'financial liability5',
      message: 'adfadsf dafdsaf adfasd sd',
      sentiment: 1,
    },
  ],
};

async function getData(loanId: any): Promise<typeof devData> {
  return request.post(`/ra/${loanId}/loanIntel`).then((res) => {
    return res.data.data;
  });
}

export default function RaAiSection({}: Props) {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState<any>(null);
  const { loanId } = useParams();

  const { data: riskInfoRes } = useQuery(
    [api_keys.RISK_ANALYSIS_DETAIL, loanId],
    () => {
      return getRiskAnalysisInfo(loanId!);
    },
    {
      enabled: false,
    },
  );

  const fetchData = useCallback(() => {
    setLoading(true);
    getData(loanId)
      .then((res) => {
        // @ts-ignore
        setData(res);
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (riskInfoRes?.data?.loan_intel_result) {
      setData(riskInfoRes.data.loan_intel_result);
    }
  }, [riskInfoRes?.data?.loan_intel_result]);

  return (
    <div style={{ color: '#4E5969', paddingTop: 32, paddingBottom: 32 }}>
      <Grid.Row>
        <Grid.Col span={5}></Grid.Col>
        <Grid.Col span={14}>
          {data && (
            <div>
              <Grid.Row style={{ background: '#fff' }}>
                {data?.interpretations.map((v: any) => {
                  return (
                    <Grid.Col key={v.message} span={12}>
                      <Space style={{ alignItems: 'center', padding: '20px 40px' }}>
                        <img src={v.sentiment === 0 ? redIcon : greenIcon} alt="" />
                        <span style={{ color: '#4E5969' }}>{v.message}</span>
                      </Space>
                    </Grid.Col>
                  );
                })}
              </Grid.Row>
              <Grid.Row style={{ background: '#0181C2', color: '#fff', marginBottom: 16 }}>
                <Grid.Col style={{ display: 'flex', alignItems: 'center', height: 50, paddingLeft: 15 }} span={12}>
                  Prediction: &nbsp;{data.prediction ? <IconThumbUp style={{ fontSize: 20 }} /> : <IconThumbDown style={{ fontSize: 20 }} />}
                </Grid.Col>
                <Grid.Col style={{ display: 'flex', alignItems: 'center', height: 50, paddingLeft: 15 }} span={12}>
                  Score:&nbsp;<span style={{ fontSize: 16, fontWeight: 600 }}>{data.score}</span>
                </Grid.Col>
              </Grid.Row>
            </div>
          )}
          {data ? (
            <div>
              <div className={'mb-2'}>Results updated on {dayjs().format('YYYY-MM-DD HH:mm')}</div>
              <Button loading={isLoading} onClick={() => fetchData()} type={'primary'}>
                <IconRefresh />
                Refresh
              </Button>
            </div>
          ) : (
            <div>
              <div className={'mb-2'}>Please click the button below to get AI analysis results</div>
              <Button loading={isLoading} onClick={() => fetchData()} type={'primary'}>
                Start now
              </Button>
            </div>
          )}
        </Grid.Col>
        <Grid.Col span={5} />
      </Grid.Row>
    </div>
  );
}
